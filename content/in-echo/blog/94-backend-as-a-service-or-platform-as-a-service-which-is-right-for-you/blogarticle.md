---
Title: Backend as a Service or Platform as a Service — Which is right for you?
SeoTitle: Backend as a Service or Platform as a Service — Which is right for you?
Author: kris
Fullname: Kris Gösser
Date: 02/06/2015
Summary: 
Lead: |
  Navigating the As-A-Service waters can be a choppy adventure. Different service flavors exist up and down the entire technology spectrum, starting as low as Infrastructure as a Service (IaaS) — access to physical hardware — all the way up to Software as a Service (SaaS) — what most people utilize daily, like Salesforce and Gmail. We've written before about [different forms of cloud delivery](https://catalyze.io/blog/what-is-cloud-computing-and-why-it-matters-for-compliance).

Tags: baas, backend as a service, paas, platform as a service
Category: company
---
Two options that sit near the middle of the spectrum are Backend as a Service (BaaS for short) and Platform as a Service (PaaS). While close cousins, they are ultimately two very different services. Catalyze provides both a [Backend as a Service](https://catalyze.io/baas) and [Platform as a Service](https://catalyze.io/paas), and we often find customers aren't entirely sure which is the best fit for them. Today we want to briefly explain the difference.

### The Backend As A Service (BaaS)

A Backend as a Service couples a basic datastore with expressive user provisioning and authentication tools. Think of it like a NoSQL database someone else manages for you off in the cloud, except that access is via a REST API. A similar yet non-compliant service is Parse.com.

User provisioning and authentication are important in healthcare since applications need to limit who can access what PHI. The most common example is a doctor should only have access to his or her patients, not every patient in the application. [Catalyze's Backend as a Service](https://catalyze.io/baas) allows you to configure "groups" of users and then determine what data they should be able to access through Access Control Lists (ACLs).

The best use case for a BaaS is when data will only reside on either the device/browser and the BaaS itself, with nothing in between. A BaaS does not have any backend processing abilities, so it's not a good fit for data crunching or processing events like handling a batch of daily claims. If those aren't requirements, BaaS does most of the heavy lifting for you. Since retrieved Protected Health Information (PHI) only ever sits on the device or browser, you have no other HIPAA infrastructure concerns other than configuring the build in security tools to meet your needs.

### The Platform As A Service (PaaS)

A Platform as a Service is something where you would deploy an entire application architecture. The full stack, from application code to database structure to backend workers, is deployed to your little slice of the cloud. That slice, at the infrastructure layer (networking and OS levels), is managed by the PaaS provider.

It's not too dissimilar from a "Host", but what makes a PaaS different is all the extra system additions a PaaS vendor provides. In Catalyze's case, we provide encryption of your data in transit and at rest, dedicated logging, monitoring, backup and disaster recovery, intrusion detection, vulnerability scanning, and more. All these additions are inherently part of the Platform — they are baked in. You must have them as additions to your environment. This important concept is what separates a "Platform" like Catalyze from a "Host" like Amazon Web Services.

[Catalyze's Platform as a Service](https://catalyze.io/paas) is just like Heroku, only we are HIPAA compliant. You would use our PaaS if you are already using someone like Heroku, or if you are using a traditional host who doesn't have the compliant add-ons, like Amazon Web Services.

The reason you would select a PaaS is because you will be processing PHI in some capacity. It could be simply validating the data before storing, or maybe you are analyzing results, or perhaps you are combining data points to provide additional services. If you are handling PHI in any way _other_ than simply storing it, the Platform is what you need.

### Your Use Case Is The Decider

Choosing between the two is relatively simple once you understand the difference. It basically comes down to your software application use case.

If you only ever plan to store and retrieve PHI and then display it in something like an iPhone app, then the Backend as a Service is for you.

Otherwise if you plan on interacting with PHI in any other way beyond simply storing it, you will want to opt for the Platform as a Service.

If you have any additional questions, feel free to ping us on our Olark site chat, where we rotate team members to help with questions just like this, or send us an email at [hello@catalyze.io](mailto:hello@catalyze.io).

