---
Title: The Importance of Business Associate Agreements (BAAs)
SeoTitle: The Importance of Business Associate Agreements (BAAs)
Author: mohan
Fullname: Mohan Balachandran
Date: 12/11/2014
Summary: 
Lead: |
  HIPAA guidelines define the safeguards for protected health information (PHI). Business Associate Agreements (BAAs) are contracts that outline how different organizations will handle electronic protected health information (ePHI) and the types of responsibilities that each organization assumes.  Simply put, a BAA defines responsibility, and thus liability, with respect to the handling of PHI data.

Tags: business associates
---
We've written about BAAs [before](https://catalyze.io/learn/business-associate-agreements). Start there for a general understanding. The rest of this article, as well as a [Part 2 that talks about the top 5 things to look for in a business associate agreement](/blog/top-5-things-you-find-in-an-ideal-business-associate-agreement), will dive into why selecting a BAA is important, and give guidance when doing so.

### It's not just a checkbox

>   A chain is only as strong as its weakest link.
>   —  A wise engineer

Catalyze has talked to many companies about their HIPAA compliant hosting requirements and how our Platform-as-a-Service (PaaS aka _Heroku for Healthcare_) can address their requirements. Our mission is to help them get most of the way down the road of HIPAA compliance. Often we discuss the topic of other vendors in the space, both similar HIPAA-compliant platforms or traditional companies like AWS, Firehost, Bluebox, etc. While the conversion usually focuses on technology and features, we emphasize the differences in our business associate agreements as well, because, in some ways, it is our best feature. With Catalyze, you sign one BAA to cover the entire compliance spectrum.

Unlike several others, we do not require a non-disclosure agreement (NDAs) to view our BAA. In fact, it's [publicly available](https://policy.catalyze.io/#catalyze-hipaa-business-associate-agreement-baa) as a part of our [open-sourced policies](https://catalyzeio.github.io/policies); we often encourage newer companies to use the business associate agreement template as a starting point for their own BAA. We specifically set aside time with new customers to explain what it covers and what is doesn't and why.

It is very important you read the language in the BAA from your vendor and understand it well. While it might seem the thought "I have a BAA with my vendor" is sufficient, the reality is when a breach or any other kind of security incident happens, you're at risk for whatever was declared in your BAA. In many ways a BAA is a mechanism for transferring risk (and thus liability) from one entity to another by having each entity acknowledging their responsibility in managing specific aspects of the legal mandates. 

### Briefly, how a business associate agreement works

Business associate agreements became a lot more interesting with the passing of the new HITECH HIPAA Omnibus Rule in 2013, which expanded upon the definition of _business associate_ to include something called subcontractors. _Subcontractors_ are typically service or technology organizations that provide additional services to the business associates, which are providing services for the covered entities.

The effect has been increased chaining of responsibilities—a good thing in today's technology landscape. As the internet, cloud computing, and APIs have broken down silos, more applications rely on different layers of technology and services, considered subcontractors. These _subcontractors_ (e.g. Catalyze, AWS) sign BAAs with _business associates_ (you), who in turn sign a BAA with _covered entities_ (health system, health plan).

It is critical for you to remember that ultimately you, as the business associate signing a contract with a covered entity, are the one left holding the ball. It is your responsibility to ensure the following:

- **Know your BAAs.** Since a chain of entities (like IaaS / hosting providers, APIs and SaaS) touch the ePHI, each must have BAAs in place with you that are consistent and not contradictory. For example, a business associate selling to Hospital ABC can't agree to a 24-hour breach notification policy if the hosting provider has a physical breach notification policy of 2 months.

- **Meet your responsibilities.** If all the hosting provider gives you is VMs and VPN access, you are now responsible for everything else HIPAA demands. We're talking about encryption at-rest or in-transit (even within your dedicated environment), dedicated logging, and so on. Know what HIPAA requires and what you're left having to take care of yourself!

### The takeaway

That leaves you with an intriguing proposition. By choosing Catalyze, you only ever have to sign one BAA. Never will you have to worry about lining up consistency with multiple vendors, or dreading the anxiety of gaps not covered.

In our next article, we will take a look at the top things you should look for in a BAA. If you have any BAA questions, feel free to [email us](mailto:hello@catayze.io), we're always happy to help.

