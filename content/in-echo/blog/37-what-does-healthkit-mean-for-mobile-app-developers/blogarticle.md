---
Title: What does HealthKit mean for mobile app developers?
SeoTitle: What does HealthKit mean for mobile app developers?
Author: travis
Date: 06/03/2014
Summary: 
Body: |
Apple WWDC was today. The buildup, as always, has been massive. It's always a surprise what will be unveiled, though some sources seem to get reliable info ahead of time. I wrote a [post](http://histalkmobile.com/what-could-healthbook-be/) last week on Healthbook. That post was largely speculative, as everything is before Apple formally announces it. In that post, I described Healthbook as the new app that is very likely going to be a part of the new version of iOS, iOS 8, from Apple.

At that time the speculation, which I delve into much deeper in the post mentioned above, is that Healthbook would be basically Passbook but for health- and wellness-related cards. There are some major differences I thought would exist between Healthbook and Passbook. I speculated that Apple would take structured health and wellness data for Healthbook cards, not just blobs of data and images like Passbook. This is a major difference from Passbook and opens up Apple as a potential aggregator and hub of health and wellness data.

Additionally, Apple has sensors built into its hardware, and these sensors are getting better with each new hardware release. These sensors can can track activity data on people. If Apple ever releases an iWatch, which it didn't announce at WWDC today, that may add to the set of data Apple is able to collect itself without 3rd party apps and sensors.

We now have a better sense of what Healthbook will be, and it won't be called Healthbook. It's called [HealthKit](https://developer.apple.com/healthkit/), and it's vying to be a hub of health and wellness data. With HealthKit, apps can share data with Apple, and Apple in turn says "the user decides which data should be shared with your app." Data can be collected via sensor or by manual patient input. [Documentation](https://developer.apple.com/library/prerelease/ios/releasenotes/General/WhatsNewIniOS/Articles/iOS8.html#//apple_ref/doc/uid/TP40014205-SW1) is scant but one of the interesting things it does say is that "Once data is shared with your app, your app can register to be notified when that data changes; you have fine-grained control over when your app is notified." This is very cool and very powerful; more on this below. Some of the first apps that come to mind for integration with HealthKit are Nike apps, Fitbit, Withings, Jawbone, MyFitnessPal, LoseIt!, and Wahoo, among others.

The sample code Apple [provides](https://developer.apple.com/library/prerelease/ios/samplecode/Fit/Introduction/Intro.html) today is for a nutrition app that tracks the name of a food and the energy associated with that food, in joules. This is such a random and specific example that I'm wondering why they used it. For this example, the name of the food is a string and joules is a double. That's all right now for documentation. It's still largely speculative how Apple will model out health data, and if Apple will add in the ability to codify data, which in health and wellness could make it much more valuable.

The biggest surprises in the announcement were partnerships with Mayo Clinic and Epic. Mayo is building an app that will integrate blood pressure readings into HealthKit, and enable sharing of that data with Mayo providers. I'm curious if there's a communication aspect of this in which Mayo providers can reach out to patients based on readings entered into HealthKit. Mayo was also quoted at WWDC, a nice piece of social proof from an established brand in healthcare.

With the Epic partnership, it's an open question what the integration will look like. Will Epic be sharing its data with Apple, or vice versa, or both? Apple played up the brand of Epic in healthcare, showcasing a slide full of logos from Epic institutions. If this is simply a way to get HealthKit data into Epic MyChart, it holds little value. The experience of viewing the data in HealthKit is going to be much better than MyChart, and having the ability to view HealthKit data alongside Epic data in MyChart is of limited value. I'm skeptical of an Apple-Epic integration any deeper than that, at least in the short to medium term.

##What does this mean for app developers?

HealthKit is important for developers, both data collectors (sensor makers and apps that collect data directly) as well as those interested in building apps that harness health and wellness data. Assuming Apple has success in getting developers to implement apps and data into HealthKit, the following are interesting things for developers to consider.

* Data is important. It's the reason Apple is trying to aggregate data from apps that run on iOS. With HealthKit, Apple is opening up a potential treasure drove of data to any app developer that can get a user to share HealthKit data with their app. This makes it easy for any mobile developer with a good design sense to build an app that harnesses data collected from a myriad of apps and devices (assuming all those apps and devices integrate with HealthKit). And if Apple integrates tracking data from its own hardware sensors, which I imagine it has to do, that's tracking data on almost every iPhone user. That's powerful for developers.

*  Data, no matter how well designed, is only going to go so far to engage individuals in their health and help drive positive behavior change. With HealthKit, apps will be able to set "fine-grained" notification rules for changes to HealthKit data. I can imagine an almost limitless number of use cases for this - messages to users to close the feedback loop, to family or friends (social pressure), to physicians or health systems to trigger interventions, to pharmacies for refills, and on and on. This opens up a ton of possibilities to go beyond data and drive real positive change in health and wellness behavior.

* Building anything for Apple means building on a platform that has access to 100s of millions of verified accounts with credit cards for payment processing. While I don't think these accounts represents all, or maybe even most, of the people in real need of help with health and wellness, it does simplify your business model if you have users that are willing and able to pay. Of course, if you use Apple for payments, you'll be giving them 30%.

* Sensor and hardware makers can focus on hardware and rely on Apple for software. I'm not sure how practical this one is, but HealthKit opens to door to extremely inexpensive sensors to integrate data into HealthKit and instantly be a part of a larger ecosystem that can write software to leverage that data.

The major things I wonder about with HealthKit relate to privacy, security, and ownership of data. With Apple potentially sharing data with healthcare providers, will it be signing BAAs and at what point does HIPAA apply? Who owns the data if a user decides to move off of iOS? Apple does not have the best track record of [supporting](http://www.techrepublic.com/article/how-to-keep-receiving-sms-from-iphone-users-after-making-the-switch-to-android/) open, cross platform standards. These are all yet-to-be-answered questions.

As part of our HIPAA-compliant backend-as-a-service (BaaS), we'll be integrating our [iOS SDK](https://github.com/catalyzeio/catalyze-ios-sdk) with iOS 8, and building some cool samples to help you get started connecting to HealthKit. With very limited information on structured data in HealthKit, we're uncertain how our structured data [models](https://docs.catalyze.io/) will map to HealthKit, but our [custom classes](https://docs.catalyze.io/#custom-classes) support unstructured data in any case. Signup for a BaaS account [here](https://devportal.catalyze.io/) today or signup for our newsletter on the right to stay informed of updates.

Tags: apple, mhealth, data, healthkit
Fullname: Travis Good, MD
---
