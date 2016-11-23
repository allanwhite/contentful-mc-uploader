---
Title: Catalyze and Swift: Bridging The Gap
SeoTitle: Catalyze and Swift: Bridging The Gap
Author: josh
Fullname: Josh Ault
Date: 02/04/2015
Summary: 
Lead: |
  Swift has been gaining a lot of traction lately. Whenever possible, all of our new iOS projects at Catalyze are written in Swift. We're embracing the change and have been enjoying the experience so far! But not all those trusted Objective-C libraries have been ported to Swift yet. Thankfully Swift is backwards compatible with Objective-C. I'll walk you through how to use the [Catalyze iOS SDK](https://github.com/catalyzeio/catalyze-ios-sdk) with a Swift project.

Tags: Objective-C, iOS, Swift
Category: company
---
### Create the Bridging Header File

First thing you need to do is open up your project and create a new file (`⌘+N`). Choose a new iOS Header file. We suggest following the naming convention `{MyAppName}-Bridging-Header-File.h` because you can only have one bridging header file per project. After you create your header file it should look something like this

```
//
//  MyAppName-Bridging-Header-File.h
//  Catalyze
//
//  Created by Josh Ault on 2/2/15.
//  Copyright (c) 2015 Catalyze, Inc. All rights reserved.
//

#ifndef MyAppName_Bridging_Header_File_h
#define MyAppName_Bridging_Header_File_h


#endif
```

### Populating the Bridging Header File

Now you need to import all of your Objective-C header files within the `#ifndef` and `#endif` tags. Including the Catalyze iOS SDK would make our entire header file look like this

```
//
//  MyAppName-Bridging-Header-File.h
//  Catalyze
//
//  Created by Josh Ault on 2/2/15.
//  Copyright (c) 2015 Catalyze, Inc. All rights reserved.
//

#ifndef MyAppName_Bridging_Header_File_h
#define MyAppName_Bridging_Header_File_h

#import "Catalyze.h"

#endif
```

You can add as many Objective-C style import statements as you want to this header file. All of the files and libraries imported will be available throughout nearly all of your Swift project.

### Setting the Bridging Header File for your Project

Lastly you need to tell Xcode where your bridging header file is. Click on your project name on the left side in the Project Navigator to open up your project settings. Then click on the `Build Settings` tab. Do a search for `bridging` and you should see a result called `Objective-C Bridging Header`. 

We need to fill in this value with the path to our bridging header file we just created. My header file was created in a folder called `MyAppName` within the root folder of my project. Therefore I need to set the value of the `Objective-C Bridging Header` to `$(SRCROOT)/MyAppName/MyAppName-Bridging-Header-File.h`. Now you should be able to use the Catalyze SDK in your Swift project. Try this line in your app delegate

```
Catalyze.setApiKey("myApiKey", applicationId: "myAppId")
```

Now you're all set to go with the Catalyze iOS SDK and your new Swift project. Please [email us](mailto:hello@catalyze.io) if you have any questions about the guide or about getting started with Catalyze and Swift. Happy coding!
