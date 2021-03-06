---
Title: 8/28/14 Release Notes
SeoTitle: 8/28/14 Release Notes
Author: alex
Date: 08/28/2014
Summary: 
Lead: |
  (We've decided we're going to make blog posts about changes and enhancements to the Catalyze v2 API when we release them, starting today.)

Tags: api, release notes, BaaS, backend
Category: company
Fullname: Alex Foran
---
#### Enhancements

* Applications can now be set as invite-only in the dashboard, requiring users to be sent an invite code via email and sign up with it. [Read more about it on the Catalyze blog](https://catalyze.io/blog/invite-only-applications/).
* Added a route to expose forgotten username retrieval - [docs here](https://resources.catalyze.io/#send-username-reminder)
* Overhauled custom classes.
    * Massive performance improvement.
    * Querying is now much more capable and expressive. Previously, only one field could be searched for, and by equality only. Now, you can search by any number of fields using a number of operators, and combine statements using "and" and "or". [Docs here](https://resources.catalyze.io/#filter-class-entries)
* Now including Objective C examples in the docs.

#### Notable Bug Fixes

* The JavaScript examples for file uploading have been corrected.
* Having a blank `X-Api-Key` header no longer returns HTTP 500.
* When downloading a file, setting your `Accept` header to either `Accept: */*` or `Accept: application/json, application/octet-stream` will now allow you to correctly receive error messages.

As always, if you run into a problem, please [let us know](https://catalyzeio.zendesk.com/).

