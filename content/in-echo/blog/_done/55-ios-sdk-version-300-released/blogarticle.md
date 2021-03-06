---
Title: iOS SDK Version 3.0.0 Released
SeoTitle: iOS SDK Version 3.0.0 Released
Author: josh
Date: 08/26/2014
Summary: 
Lead: |
  We've just released version 3.0.0 of the Catalyze iOS SDK! There are tons of new resources in the SDK to help you build HIPAA compliant mobile apps that will change healthcare. Head on over to the [github repo](https://github.com/catalyzeio/catalyze-ios-sdk) to get started.  The README has tons of examples and details on how to install the SDK.

Tags: iOS, SDK, BaaS, mobile
Category: company
Fullname: Josh Ault
---
If you're upgrading from a previous SDK version check out the [migration guide](https://github.com/catalyzeio/catalyze-ios-sdk/wiki/ios-3.0-migration-guide) to see what's changed and how you can quickly bring your app up to speed with the latest version. Here's a quick list of what's changed:

* File management has been added
* Completion blocks have been split up into success and failure blocks
* Correct instance types returned from all network requests
* API Errors reported in failure blocks in the NSDictionary result parameter
* New querying Capabilities
* CatalyzeObject renamed to CatalyzeEntry (still exists but deprecated)
* Ability to edit the base url
* Almost all hardcoded strings have been moved to constants
* CatalyzeUser conforms to CatalyzeObjectProtocol
* Updated AFNetworking to 2.3.1

New to Catalyze? [Signup](https://dashboard.catalyze.io/signup) for a free trial account or check out our [documentation](https://dashboard.catalyze.io/resources) for information about our HIPAA compliant API and SDKs. Feel free to [email us](mailto:hello@catalyze.io) if you have any questions or feedback. You can also send us a support request at [support@catalyze.io](mailto:support@catalyze.io) if you get stuck.

