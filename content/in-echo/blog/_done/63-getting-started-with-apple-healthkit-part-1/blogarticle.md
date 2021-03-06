---
Title: Getting started with Apple HealthKit - Part 1
SeoTitle: Getting started with Apple HealthKit - Part 1
Author: josh
Date: 09/10/2014
Summary: 
Lead: |
  Perhaps one of the most exciting updates with the upcoming release of iOS 8 is HealthKit API and associated Health app from Apple. With the HealthKit API, developers now have a way to pour health data into a centralized location on each device and access data stored in HealthKit created by a multitude of apps and devices. This opens the door for a tremendous amount of possibilities. First of all, Apple takes away one of the biggest hurdles with its Health app pre packaged on every device running iOS 8, deciding which health app to download. The Health app allows the owner of the device to see their health data that's being collected by multiple applications across their entire device aggregated in one location.

Tags: healthkit, api, iOS
Category: company
Fullname: Josh Ault
---
This is great news for end users as they don't have to change which apps they are using to collect their health data and developers don't have to worry about talking directly with other apps. Everything deals directly with HealthKit. In the next couple posts we'll talk about some of the great features HealthKit offers and how you can leverage those to build an iOS health application. This post is going to primarily give a broader overview of HealthKit with shorter code snippets while the second will go into more detail with full code examples.

### Permissions

With HealthKit, Apple puts end users in charge of their health data on a very granular level. Before you can use HealthKit you need to request access to the types of data that you want to read or write. If you want to be able to list the user's birth date and weight but want to record temperature readings, then you would need to request read permissions for birth date and weight while requesting read and write permission for temperature.

Once permissions are requested, the user is shown a dialog explaining the types of data that you requested access to and is given the ability to reject individual requests. If you requested write access and you are rejected you can get notified in your application. However, when a read request is rejected, no notification is given and it is impossible to tell whether or not the user rejected your request to read their data or they just have not clicked accept yet.

Hiding whether or not users rejected a read request protects a lot of information about a user. For example, if you request access to blood glucose levels and you get notified that the user has rejected your request then you could assume the user may have diabetes. Protecting this information is just one of the many ways that HealthKit puts security into the hands of the end user.

In HealthKit, all permissions are associated with an instance of `HKHealthStore`. In your application it is best to only have a single instance of this class so you only have to ask permissions from the user once. Otherwise they will continually be asked to approve your application to read and write data.

The timing of this permissions request can dampen the effectiveness of your application. It is unwise to immediately ask the user upon the application starting up to access their HealthKit data without any explanation. It is a much better practice, especially if you have any sort of a login screen, to have the user login first and get acquainted with your application. Understand the sort of data its going to be collecting. Then perhaps the first time that you will need access to HealthKit, request the permissions. Once you have the correct permission, you can start creating data points.

### Units

The most basic part of any HealthKit data point is a unit, which are essentially units of measure for the health data collected via HealthKit. You can collect numbers from your users to no end but they will have little meaning without a unit. In HealthKit, the class representing units is called `HKUnit`. Units are fairly straightforward and many units are already builtin to HealthKit and have helper methods to quickly create the unit you need. Or if there is no helper method to create your unit, the easiest way is to create the unit with what is called a unit string

	HKUnit *gram = [HKUnit gramUnit];
	HKUnit *mgPerdL = [HKUnit unitFromString:@"mg/dL"];

Your units should be chosen appropriately for the type of data being collected. For example, you wouldn't choose grams when measuring temperature and its unlikely you would choose Kelvin when measuring temperature either. The two most appropriate choices for temperature would be either Fahrenheit or Celsius. This choice is up to personal preference as HealthKit does not prefer one or the other. There are a number of APIs within HealthKit that aid in converting units between US standard units and the metric system but those are beyond the scope of this blog post.

### Quantities

Now that we can construct our units and we have collected a number from our user through a screen in our application, we need to combine these. In HealthKit, a combination of a value and a unit is called a quantity. These are of the type `HKQuantity`.

	HKQuantity *quantity = [HKQuantity quantityWithUnit:gram doubleValue:120.0];

Although fairly simple, quantities are powerful and are the basis for unit conversion.

### Unit Conversion

To convert units in HealthKit all you need is an instance of `HKQuantity` and an instance of `HKUnit` of the unit that you would to like to convert to. Of course you can't just convert any unit into any other unit or HealthKit will throw an exception. But you can ask HealthKit if the conversion will succeed first and then perform the conversion

	[quantity isCompatibleWithUnit:[HKUnit unitFromString:@"kg"]]; //this one returns YES
	double kg = [gram doubleValueForUnit:[HKUnit unitFromString:@"kg"]];

### Samples

We've got our values from the user, the units, and our quantities. Now we are ready to create our object that we are going to store in the HealthKit database. In HealthKit, the only way to store data is with a sample. There are two primary types, `HKQuantitySample` and `HKCategorySample`. Both of which subclass `HKSample`. Please note that `HKSample` also subclasses `HKObject` as does nearly every other data storage class in HealthKit but it is not related to this example. Here is a diagram showing the relationship between the 4 classes.

(image: HKObjectHierarchy.png)

Quantity samples are measurements with a value associated with them, or a quantity. This is something such as blood glucose levels, body mass, heart rate, or temperature. Category samples are measurements that can be placed into categories. Currently there is only one value in HealthKit for category samples and this is sleep analysis. You could assign a category such as `asleep` or `in bed` to a user's sleep status. Since quantity samples yield much more discussion, lets take a deeper look at how we create an `HKQuantitySample`.

	HKQuantitySample *mySample = [HKQuantitySample quantitySampleWithType:bloodGlucoseType quantity:quantity startDate:now endDate:now metadata:nil];

This tells us that quantity samples (category samples as well) are composed of a type, a quantity (a value for category samples), a start date, an end date, and some metadata. Start dates and end dates mark the time at which the data was collected. For instantaneous measurements such as blood glucose levels, the start date and end date are the same. They are equal to the time at which the measurement was taken. Another easy concept is metadata. This is any extra information you want to store about the sample. This is a simple dictionary of values but is limited to strings for keys, and strings, dates, and numbers for values. The metadata is a lot like `extras` in most Catalyze models. But the most interesting components of a sample are the type and quantity.

### Types

Types are arguably the most important part of a sample. Without a sample all you have is a quantity and a few dates. So maybe you know that your sample was 120 mg/dL taken on September 9th, 2014. To you and I we know that is likely a blood glucose measurement. But to a computer, its simply a number, a unit, and a date. Types tell HealthKit what the data is measuring. It give health data meaning and context. It's 120 mg/dL of blood glucose levels. Or its 98.6 ˚F body temperature. Together with units, types make your data meaningful. Much like the different kinds of samples, there are different kinds of types as well. There are `HKQuantityType` and `HKCategoryType` both of which subclass `HKSampleType`. But we also have `HKCharacteristicType`. Both `HKCharacteristicType` and `HKSampleType` subclass `HKObjectType`. Here is a diagram showing the relationships.

(image: HKObjectTypeHierarchy.png)

Quantity and category types are identical to samples. If you have a blood glucose sample (which is of type HKQuantitySample), your going to need an HKQuantityType. Quantity types are initialized with an identifier. These identifiers are listed in the classes they belong to and are prefixed with the appropriate types. This is best described with an example. If your sample was a blood glucose sample, which again is an HKQuantitySample, your type would be an HKQuantityType and your identifier would begin with the `HKQuantityType` prefix. The entire identifier being `HKQuantityTypeIdentifierBloodGlucose`

	HKQuantityType *bloodGlucoseType = [HKObjectType quantityTypeForIdentifier:HKQuantityTypeIdentifierBloodGlucose];

Similarly for category types

	HKCategoryType *sleepAnalysisType = [HKCategoryType categoryTypeForIdentifier:HKCategoryTypeIdentifierSleepAnalysis];

Characteristic types are a new type of data that is not represented by a sample. This type of data contains the identifiers for biological sex, birth date, and blood type. This type of data wouldn't really be changing often if at all. HealthKit treats this data a bit differently than the rest of the data it stores as there are not multiple copies of it. There is just the latest value of each of those three characteristic data types that you may want to retrieve. For these, HealthKit provides separate methods for saving and retrieving these values than the normal flow. These will be covered in the second part of this blog post.

Other than characteristic data, all data in HealthKit must be structured. A unit and a type is required when saving data to HealthKit.

### Storing Data

We've got everything we need to save our data to the HealthKit database! Just call `saveObject:withCompletion:` on your instance of `HKHealthStore` and you're all done. Pretty simple! All you need is a `Sample`. Here is a graphical view of the different components that compose a sample. This particular sample is the blood glucose sample mentioned above. It is of type `HKQuantitySample`.

(image: HealthKitSampleComposition.png)

### Completion Blocks

HealthKit commonly performs asynchronous operations and lets you know when its done through these completion blocks. But nearly all completion blocks in HealthKit are run on `anonymous background queues`. So in your completion blocks, if you are using any classes from UIKit, you're going to need to dispatch your code back to the main queue. Part 2 of this blog post will discuss this and show in depth how this can be done. It is a requirement of iOS that all UIKit classes be accessed from the main thread.

### Queries

Great! We've saved some data. Maybe you saved a lot of it. The problem is that we need to get back at the data. Consider this scenario. A patient uses an app to track their blood glucose levels for a few months and goes to see their physician. They get asked questions such as when their last reading above 140 mg/dL was? and can you show me all of the readings since you've taken since our last visit? Our patient is usually forgetful and does not know the answer or when the last visit was. But the app the patient uses to track his blood glucose levels uses HealthKit's querying capabilites to easily retrieve this sort of information!

#### Non Characteristic Data

Querying non characteristic data is the most basic type of query. This simply retrieves all data matching a set of parameters and returns the results. All queries inherit from `HKQuery` which has two properties: a `sampleType` and a `predicate`. The sample type is what kind of data is being queried for. This is an instance of `HKQuantityType`, or `HKCategoryType`, etc. The predicate is the set of parameters that must be matched in order to add the data point to the returned results. This predicate can be created in a few different ways discussed in depth in part 2 of this blog post. Using our above example, the predicate would be used to filter out all blood glucose readings below a certain threshold.

Queries also have a limit and sort order. The limit is going to work much like `LIMIT` in a MySQL statement or any other database for that matter and it will cap the number of returned results to the given limit. No limit can be specified by passing `HKObjectQueryNoLimit`.

Sort order is a bit more involved. This is an array of NSSortDescriptors. If you've never worked with NSSortDescriptors before you don't need to worry as they are not extremely difficult to figure out. Here is an example of a single NSSortDescriptor

	[NSSortDescriptor sortDescriptorWithKey:HKSampleSortIdentifierEndDate ascending:NO];

This sort description is sorting by end date for all returned results in descending order. You can use autocomplete to your advantage within Xcode by typing `HKSampleSort` and looking through the results.

#### Characteristic Data

Much like saving characteristic data, there are special methods for retrieving characteristic data from HealthKit that are discussed in further detail in part 2 of this blog post.

#### Observer Queries

One of the most exciting querying mechanisms are observer queries. If you wanted to watch certain data in the HealthKit database you could implement a polling mechanism to request the latest data every so often but thats resource intensive and can be difficult to implement and perfect. This is where `HKObserverQuery` comes in. These are long running queries and will run until they are told to stop no matter how many times results are returned. Much like a normal query has a completion block, observer queries have an update handler that receive results everytime the data being watched is changed.

This type of query would be particularly useful for integrating with a piece of hardware. If a user was wearing a heart monitor that repeatedly saved data to HealthKit you could create an application that showed your heart rate in real time. This can be an extremely powerful tool!

### Extending HealthKit with Catalyze

At Catalyze we can help you get started with HealthKit. We have begun developing a utility that will allow you to easily save your data to both HealthKit and our HIPAA compliant APIs simultaneously. That way if anything would ever happen to the user's device, their health data would be stored in an external location and still accessible to them. Another situation we find that this would be extremely helpful would be if the user revokes your application's permission to read or write any data to HealthKit. In the event that this happens you are no longer able to retrieve any data at all. Not even data your application created and wrote to HealthKit when you had access. You had just lost all your historical data about the user. Using this tool you will be able to retrieve this data from our APIs and perform any operations on the data that you'd like, respecting the patients privacy of course.

Be on the lookout for another blog post announcing the release of this tool so you can start developing with HealthKit and Catalyze! We're excited to see the applications you come up with and would love to hear about them. Feel free to [email us](mailto:hello@catalyze.io) with any feedback or questions you might have.

