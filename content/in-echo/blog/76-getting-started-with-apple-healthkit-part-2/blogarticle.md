---
Title: Getting started with Apple HealthKit - Part 2
SeoTitle: Getting started with Apple HealthKit - Part 2
Author: josh
Date: 10/31/2014
Summary: 
Lead: |
  With the release of iOS 8 there has been a lot of talk about Apple's HealthKit, especially with the initial delay of applications that went to market who used HealthKit. Here at Catalyze we've been working hard to expand on the services we offer and bring you new ones as well. This is why we've decided to write a small wrapper around the `HealthStore` class. Our `CatalyzeStore` makes it easy to store your data to both HealthKit and to Catalyze's BaaS. To use this in your application, download the latest code from the [iOS SDK repo](https://github.com/catalyzeio/catalyze-ios-sdk) or upgrade to version `3.2` or later if using cocoapods. This second part of our HealthKit blog posts will walk you through completing an application so that by the end, you will have a finished product, learned about characteristic data, getting data out of HealthKit, and storing data simultaneously to HealthKit and Catalyze.

Tags: apple, healthkit
Fullname: Josh Ault
---
Start off by cloning the repo from the master branch [https://github.com/catalyzeio/RunLog](https://github.com/catalyzeio/RunLog). This application uses cocoapods so open up a terminal to the root of the project and run `pod install`. Open up the `RunLog.xcworkspace` after that completes successfully.

If you don't already have an account, head over to the Catalyze [dashboard](https://dashboard.catalyze.io) and sign up. You'll need to create an organization, an application, an api key, and a custom class. The custom class should be called `health_kit`, marked `phi` as true and have the following schema

|Column Name | Data Type|
|------|-------|
|startDate | string|
|endDate | string|
|identifier | string|
|value | double|
|units | string|

This custom class is where your HealthKit data will be backed up using Catalyze HIPAA compliant APIs which is discussed later on in the post. After this is done you'll need to record two things, your API Key and your application ID. These are set in `AppDelegate.m` where you see `[Catalyze setApiKey:@"" applicationId:@""];`

You will also need to insert your username and password into the application. **Please note** this is for development and testing purposes only and in a production application you would likely have a login screen where users can sign in with their own Catalyze account or register for one. This step is required if you want to backup your data using the Catalyze HIPAA compliant APIs. This can be set in `HomeViewController.m` where you see `[CatalyzeUser logInWithUsernameInBackground:@"" password:@""...`.

After you've completed these steps your ready to start learning more about HealthKit and get started on a HealthKit ready iOS application!

##Requesting Permission

###Determining What Permissions You Need

The first thing, after you get the HealthKit framework added to your application, that you're going to need to do is decide what sort of information you are going to require from the user. I recommend you spend some time on this and think it through. There's a few things to consider when deciding what permissions you are requesting. The first of which is most obvious and don't request access to data that you aren't going to use. Next, I recommend that you don't request access to data that you don't need. Notice the difference between data you're going to use and data you're going to need.

The RunLog application we are going to write throughout this blog post is a perfect example of what **not** to do. This application requests access to your body weight, height, and biological sex for no other reason than to display it on the screen. This is an excellent example of when you do not *need* that data. Yes we are going to use it, but the app would function as a run logger without it. With that said, we will continue to request those permissions in order to show you how to use characteristic data and perform queries.

###Perform the Request

Now that we we've thought about what data we need access to, we can write the code the request permission. Find `requestHealthKitData`, `dataTypesToRead`, and `dataTypesToWrite` in the `ProfileViewController.m` file. The last two methods are fairly simple to implement once you know the syntax and you've done it once. Let's finish those first.

<script src="https://gist.github.com/jault3/1399c8e75cf213663448.js"></script>

<script src="https://gist.github.com/jault3/b151153f481c3b7349ca.js"></script>

From these methods we can tell that HealthKit requires an NSSet of HKObjectTypes when requesting data to read and write. Depending on the type of data it's going to be HKQuantityTypes, HKCharacteristicTypes, etc. Now we can make the request to HealthKit. Put this code in `requestHealthKitData`

<script src="https://gist.github.com/jault3/95135a451223e5d0349a.js"></script>

This code is what actually causes the view controller to show up on screen requesting user permission.

##Populating Characteristic Data

In part one of this post, I talked about the differences between characteristic and non-characteristic data in HealthKit. The RunLog application uses characteristic data as part of your profile screen to give examples of how your might query HealthKit for this kind of data. Currently only biological sex and birthday are populated. As we saw in the Requestion Permission section, you cannot write characteristic data to HealthKit so this section only covers obtaining characteristic data.

The first thing we're going to need to do is find the `prePopulateFields` method in `ProfileViewController.m` and look for the `TODO` about fetching biological sex and updating the label. To fetch characteristic data in HealthKit, you perform synchronous operations. Lets query for the biological sex and update the text field based on possible values.

	HKBiologicalSexObject *biologicalSex = [_healthStore biologicalSexWithError:nil];
	if (biologicalSex != nil) {
        switch (biologicalSex.biologicalSex) {
            case HKBiologicalSexFemale:
                _txtBiologicalSex.text = @"female";
                break;
            case HKBiologicalSexMale:
                _txtBiologicalSex.text = @"male";
                break;
            default:
                break;
        }
    }

Similarly for birthday and using the supplied date formatter, fetch the user's birthday and update the text field.

	[formatter setDateFormat:@"MMMM dd, yyyy"];
    _txtBirthday.text = [formatter stringFromDate:dob];

Now if we run the app and go to our profile screen, we should see that our birthday and biological sex are filled in! If you're not seeing anything, thats because you haven't set them from the Health app. Close out of the app and head over to the Health app. Click on the `Health Data` tab on the bottom tab bar, then click `Me`, and you should see an `Edit` button in the top right. Your screen should look like this.

(image: healthkit-part2-1.png)

Update your birthday and biological sex and go back to your profile in RunLog. You will now see these fields pre populated with the data you just filled in.

##Querying

Now that we've populated all the characteristic data, it's time to include the non-characteristic data. Characteristic data is retrieve through the use of a query. In our case, we will be using `HKSampleQuery`. We will use two queries: one for retrieving the user's latest height and one for retrieving the user's latest weight.

###Populating the Height and Weight Fields

Populating data for height and weight and nearly identical queries. So to walk through this, we will explain how to query for height first. Then the code for querying weight will be given so you can paste it into the application.

First find the method `retrieveHeight` in `ProfileViewController.m`. Here is a list of steps we need to take in order to accomplish this task.

1. Construct a query
2. Limit the results to 1
3. Only retrieve the latest result (sort them by end date)
4. Do not filter the results
5. Execute the query
6. Pull out the height (weight) value as a double in inches (lbs) from the resulting sample
7. Dispatch the text field update on the main queue

Let's see what this might look like

<script src="https://gist.github.com/jault3/432330035ed51e76c05e.js"></script>

As you read through the code, the comments give you a good idea of what's going on. A similar query is constructed for populating the weight text field.

<script src="https://gist.github.com/jault3/78a001b891c34ee8350a.js"></script>

Now you should be able to run the app and see the last values for height and weight populated in the appropriate text fields. If you don't see any values, try opening the Health app and going to the height and weight sections under the `Health Data` tab and inserting some data! In the next section we will discuss how we can save new values with our application instead.

###Saving New Height and Weight Values

Showing previous data is a great start to filling in a profile page. But for data like height and weight, these are not constant values. This is why they are classified as non-characteristic data. We need to allow the user to be able to update their height and weight from the profile page. To do this we need to construct instances of `HKQuantitySample` and save them to HealthKit.

Find the method `storeHeight` in `ProfileViewController.m`. This is the method called when the user hits the return key on the keyboard after they are done editing the height text field. We need to pull out the height value in the text field and construct a sample with appropriate units.

<script src="https://gist.github.com/jault3/6051dcb3107cfeae9c22.js"></script>

Lastly we save the sample to HealthKit and we call the method we wrote in the previous section to query HealthKit for the latest height data and update the text field. The process for the weight text field is nearly identical.

<script src="https://gist.github.com/jault3/81b1a739768cdf430a29.js"></script>

At this point you should have a fully functional profile page. Pre population of first and last names, biological sex, birthday, height, weight, and saving new height and weight values. Run the app and try it out!

##Saving a New Run Log

Awesome! We've got a fully functional profile screen and we've covered how to run a basic query. Behind all queries is a set of data. This data can come from any number of places but for RunLog specifically, we only care about the data from our application. So that means we need to put some data back into HealthKit or we won't have anything to query.

Open up `NewRunLogViewController.m` and find the `saveAndFinish:` method. This class essentially lets the user enter in their latest run. It collects the starting and ending heart rate as well as how far they ran. However, we aren't just going to package this data up and put it into HealthKit. We're going to leverage Catalyze's BaaS as a redundant data store in case anything goes south with our application. This is an important concept to understand when working with HealthKit. Your application's access to HealthKit and all of its data, whether you created it or not, can be revoked by the user at any time. You should have a secondary HIPAA compliant data store you are using to keep track of your information should anything like this happen.

Let's start storing some data! Typically when working with HealthKit you need these 6 HealthKit related components

1. An HKUnit
2. An HKQuantity
3. An HKQuantityType
4. An HKQuantitySample
5. An HKQuantityTypeIdentifier

When working with the `CatalyzeStore` you only need 1 HealthKit related component

1. An HKQuantityTypeIdentifier

We were able to abstract away from HealthKit so that all you need to give us are basic types built into the Objective-C language. Units are taking care of by just passing in unit strings such as `mi` and values for things such as distance by just passing in a double value in the given unit. Here's how saving a new Log would look.

<script src="https://gist.github.com/jault3/263bb908bda7fb36578b.js"></script>

You can see that we collected the values we needed, we stored some metadata about the objects, and we gathered our start and end times. After that it was a simple save to the `CatalyzeStore`. Feel free to open up `CatalyzeStore.m` and look at the source code. Behind the scenes we are saving HKQuantitySamples as we saw in part 1 of this blog post.

##Populating the List

We've backed up our data using Catalyze's HIPAA compliant APIs and we've stored our data in HealthKit on the device. Now when the user opens the RunLog, they expect to see their most recent entries. Much like we did for health and weight, we need to query for these entries. There are a characteristic unique to this query. Find `queryRecentRunLogs` in `RunLogListViewController.m` and let's take a look

<script src="https://gist.github.com/jault3/ec82d70e932210c19b31.js"></script>

If you'll notice in this query we are using a predicate. In the queries for height and weight we set the predicate to nil. Predicates can be constructed in many ways, but the simplest ways using the built in helper methods on the query class that you are using. In our case, we used a helper method `predicateForObjectsWithNoCorrelation` on the `HKSampleQuery` class. This predicate is best described by what it is not. Most of the time you will want to filter your results by things that may be greater than or less than a certain value. The predicate that we use signals to HealthKit that we don't care about the correlation between data and that no matter what, we want the results. It's a quick way to get all recent results without caring about anything else which is perfect for this use case.

After you fill in this last query we should have a finalized RunLog application ready to launch. Fire up the simulator and start logging some runs! You can always check out RunLogs `finished` branch on Github to check your work. That will have a fully functional application and what you should end up with following along with this blog.

##More HealthKit!

We're all very excited about HealthKit and all the functionality Apple has packed into it. There's always more to learn and Catalyze is happy to make developer's lives easier. Feel free to [email us](mailto:hello@catalyze.io) with any feedback or questions you might have.

