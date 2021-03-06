---
Title: How not to get your Healthcare app on this list
SeoTitle: How not to get your Healthcare app on this list
Author: ben
Date: 06/23/2014
Summary: 
Lead: |
  As a startup, we of course follow [Hacker News](https://news.ycombinator.com/) religiously. Over the weekend, [Plain Text Offenders](http://plaintextoffenders.com/) (PTO) made the top slot. You can follow the discussion [here](https://news.ycombinator.com/item?id=7927123).

Tags: hipaa, security, privacy, api, baas
Category: company
Fullname: Ben Uphoff, PhD
---
Essentially it is a Internet shaming site that shines light on companies that store users' passwords in plaintext (i.e. not hashed using secure hashes and salts, leaving the passwords easy to obtain by attackers).
Here I use the term "shaming" in a positive context, as security lapses like storing passwords in plaintext, should be called out. Further more, PTO provides recourse for sites that clean up their password management practices under the [Reformed Offenders](http://plaintextoffenders.com/reformed) section of the site.

This site is highly relevant to developers and organizations building mobile and web applications in the health IT space. Being on PTO site means that you are likely in violation of HIPAA and subject to fines. A quick scan of the site shows that a health care exchange made the list. Risking a HIPAA violation for something technically solvable, like secure password management, makes no sense to me as a security officer.

### Does HIPAA prohibit the use of plaintext passwords?
Ironically, [HIPAA](http://www.hhs.gov/ocr/privacy/)'s requirements give little guidance on the matter of how to store and protect passwords. Section 164.308(a)(5)(ii)(D) does mandate that developers implement procedures *"for creating, changing, and safeguarding passwords"*. This is  pretty weak guidance on a very significant issue.

For another example of how limited this guidance is, see the Department of Health and Human Service's own guidance on the matter in the "Password Management" section of [this PDF](http://www.hhs.gov/ocr/privacy/hipaa/administrative/securityrule/adminsafeguards.pdf).

The keyword in the above examples is "safeguarding". No auditor or technical expert would argue with a straight face that plaintext passwords are safely or sufficiently protected from unauthorized access.

Looking at another section of HIPAA, Section 164.308 states:

> (A) Risk analysis (Required). Conduct an accurate and thorough assessment of the potential risks and vulnerabilities to the confidentiality, integrity, and availability of electronic protected health information held by the covered entity or business associate.

> (B) Risk management (Required). Implement security measures sufficient to reduce risks and vulnerabilities to a reasonable and appropriate level to comply with §164.306(a).

Again, it's hard to imagine that plain text passwords would not be identified as a risk or vulnerability, and the correction thereof would not be considered "reasonable and appropriate".

### Don't forget the fines
Even if HIPAA doesn't spell out how to manage passwords from a technical standpoint, it does define stiff fines for those that negligently fail to protect patient data. By any account, storing plaintext passwords does amount to willful neglect. If your app's database gets accessed by an unauthorized user or malicious insider then the attacker has access to all the data protected by those plaintext passwords. The fines for this sort of breach would be severe and prison time is also a possibility.

### Catalyze BaaS gets this right by default
A key feature of the Catalyze BaaS, a HIPAA compliant API and mobile backend as a service, is our powerful user model. It integrates authentication, authorization and storage of user data into a single, easy to use model.
We handle password management out of the box, in a HIPAA compliant manner. We do not store user passwords in plaintext. Passwords are salted and hashed with SHA-256. If one of your users forgets their password we provide a safe and secure password reset capability for your app. The user gets sent a single use link via email that lands them on a password reset page.

None of these things are hard to implement technically but Catalyze's [API](https://docs.catalyze.io/api/latest/) gives you these features and a full HIPAA compliant backend and supported infrastructure. Leave the security and privacy details to us so that you can focus on building the next great health care app.

If you are interested in getting started with Catalyze BaaS, please take a look at our [API Guide](https://docs.catalyze.io/guides/api/latest/).

