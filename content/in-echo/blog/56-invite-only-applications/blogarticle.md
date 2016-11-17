---
Title: Introducing Invite Only Applications
SeoTitle: Introducing Invite Only Applications
Author: josh
Date: 08/27/2014
Summary: 
Lead: |
We are continually updating our services here at Catalyze and are excited to announce a new feature we just rolled out for our HIPAA compliant API, or mobile Backend as a Service - Invite only apps! Now after you create an application in the [dashboard](https://dashboard.catalyze.io/) you can check the `Invite-only` box by editing the app and you're all set.

Tags: invite, api, BaaS, invite only, apps
Fullname: Josh Ault
---
This enables you to have control over who is using your application. Before invite-only apps, if anyone got a hold of your application they could sign up and start using your application. With our new invite-only feature, now your application is safe.  A rogue user could have pushed the boundaries of the free user limit or the Rate Limiter, but now you can control who you want to have access. This is especially helpful when developing beta only applications or testing out our service on the free tier. We've also discovered that some of our larger health system and payer customers want invite-only apps for certain groups of members/patients or providers.

There is also a new section of the dashboard to help out with user and invite management. Login and head over to the `Invite` section of the dashboard. Here you'll see a place to type in an email address to send out an invite to your application as well as a list of outstanding invites. Just in case you mis-type an email address, you can always delete the invite before it is used. But be careful, you will have to manually delete that user if they sign up and used their invite code!

Once a user receives their invitation, they will expect to see an invite code field in the application they have been invited to. So don't forget to give users some place to paste their invite code! This will likely be part of the registration process for an application.

##SDKs

If you start sending out invites you'll notice the user gets an email with a special code they have to use in your application. Both the iOS and Android SDKs support this feature! For iOS

<script src="https://gist.github.com/jault3/c1e9b7385680e7afd172.js"></script>

and for android

<script src="https://gist.github.com/jault3/1fb7d9dc6fa4d4760013.js"></script>

After initial signup you will never need the invite code again. You will just need to create a place where users can input their invite code within your application.

##Custom Applications

If you are developing an application that's not iOS or Android, its a simple addition to take advantage of this feature. Just include the `inviteCode` key in your user JSON and everything will work perfectly.

##Let's Get Developing

We're really excited about the invite-only feature and think it's great news for developers building applications on Catalyze. It's a powerful way to selective distribute an application, and it's something we've been asked about a lot. We think invite-only and HIPAA go well together, and hope you do too.

But we want to point out that when you invite a user, an email is sent to them from a Catalyze email address rather than one from your domain. New customization features are on our radar for topics such as customized email communication and user activation styled to your liking, but those features aren't ready just yet. As always, feel free to [email us](mailto:hello@catalyze.io) if you have any questions or feedback. We look forward to seeing what you can create!
