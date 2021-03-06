---
Title: Catalyze BaaS Shellshock Update
SeoTitle: Catalyze BaaS Shellshock Update
Author: mark
Date: 09/26/2014
Summary: Here's what we know about Shellshock vulnerability, and how it affects your usage of BaaS.
Lead: |
  As you're likely aware, [CVE-2014-6271](http://www.troyhunt.com/2014/09/everything-you-need-to-know-about.html) or "Shellshock" was made public in the last 24 hours. Considered by many to be a vulnerability of Heartbleed proportions or greater, security analysts and programmers sprung into action to begin to fix the problem. Here's what we know and how it affects your usage of BaaS:

Tags: shellshock, security
Category: company
Fullname: Mark Olschesky
---
1. **No piece of code which operates BaaS has access to bash or can possibly run bash.** No CGI Scripts. Nothing.
2. This doesn't mean that we aren't still cautious. We applied current system updates to BaaS servers for both Ubuntu and bash, but while this prevented certain Shellshock exploit user cases, it did not prevent all of them. *Again, this doesn't affect BaaS.* However, for other software which you might be running this might not necessarily be true. Upstream developers from bash have not yet published a patch, so be wary as a developer: there is no definitive fix to Shellshock just yet.
3. We run and monitor IDS on all of our servers for BaaS, but this caught IDS vendors and solutions by surprise too. We don't believe there have been any attempts to exploit Shellshock against BaaS, but we'll continue to monitor our logs for any suspicious activity. However, any attempts would fail since none of the code which runs BaaS has access to bash.

When an authorized patch from bash and Ubuntu are available, we will apply those patches to our BaaS servers. At that time we will provide you with an all clear. Any updates regarding Shellshock and BaaS will be posted here on the blog.

Thanks for sticking with us. Since PHI is stored on BaaS, it is our responsibility to protect your data. We're always proactively working to protect your data, and you can read more about how we do that here: [Catalyze Policy](https://catalyze.io/policy/)

Thank you, 

The Catalyze Team
