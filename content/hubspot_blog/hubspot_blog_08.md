---
title: "HHS Guidance on HIPAA Compliance in the Cloud: What You Need to Know"
slug: hhs-guidance-on-hipaa-compliance-in-the-cloud-what-you-need-to-know
pubDate: "Wed, 30 Nov 2016 14:12:00 GMT"
dateUnix: 2016-11-30T14:12:00Z
author: travis
summary: |
    HHS released it's official [Guidance on HIPAA & Cloud Computing][1] last month. The guidance answers some lingering questions that people seem to ask. 
lead: |
    HHS released it's official [Guidance on HIPAA & Cloud Computing][1] last month. The guidance answers some lingering questions that people seem to ask. In some ways, it's HHS playing catchup to the industry. The cloud, while still early in terms of adoption in healthcare, is already heavily used for creating, receiving, maintaining, and transmitting ePHI. Look no further than [athenahealth][2], one of the largest EHR providers, for an example of a lot of ePHI in the cloud. Storing or moving data around different cloud-based services is becoming more and more commonplace.
---

> A lack of transparency results in distrust and a deep sense of insecurity. - Dalai Lama

Personally, I think HHS could and should play a more active and significant role in trends like cloud computing. I acknowledge it's hard to keep up with pace of technology in healthcare but there's still more HHS could do to engage with those leading these technical charges. That said, it's good to have official guidance from HHS.

Yesterday I jointly conducted a webinar with [Coalfire][3]. Today I will recap some of the highlights, and pull out the salient points from the guidance and summarized them below. (_Note: CSP stands for cloud service provider._)

* **Lacking encryption keys doesn't prevent you from being liable under HIPAA.** From the guidance, _This is true even if the CSP processes or stores only encrypted ePHI and lacks an encryption key for the data. Lacking an encryption key does not exempt a CSP from business associate status and obligations under the HIPAA Rules._ This has been a claim by some CSPs and this is one of the most clear and relevant aspects of the HHS guidance. The claim by some CSPs is that, by not having the keys to decrypt ePHI, they are not a subcontractor or business associate. HHS says they are because they still store receive and maintain, even if that ePHI is encrypted and the CSP does not have the key to decrypt it. CSPs that fall into this bucket at considered _no-view services_ by HSS.
* **But lacking keys does change obligations.** From the guidance, _In particular, where only the customer controls who is able to view the ePHI maintained by the CSP, certain access controls, such as authentication or unique user identification, may be the responsibility of the customer, while others, such as encryption, may be the responsibility of the CSP business associate._ This is the first I've seen HHS acknowledge—implicitly, at least—the concept of compliance inheritance for HIPAA. At Catalyze, we [pioneered][4] the concept of inheritance and still feel strongly that compliance inheritance is the best path to securing data, reducing risk of breach, and complying with HIPAA, in a cloud-based world.
* **Lacking keys it could change breach reporting.** From the guidance, _If the ePHI that has been breached is encrypted consistent with the HIPAA standards set forth in 45 CFR § 164.402(2) and HHS' Guidance [13](#) the incident falls within the breach "safe harbor" and the CSP business associate is not required to report the incident to its customer._ This is significant as it changes breach reporting requirements for no-view CSPs, and breach reporting is a big part of HIPAA and a big part of what covered entities want to understand about their business associates and partners.
* **All types of cloud configurations are ok for HIPAA.** From the guidance, _…while a covered entity or business associate may use cloud-based services of any configuration (public, hybrid, private, etc.), [3](#) provided it enters into a BAA with the CSP, the type of cloud configuration to be used may affect the risk analysis and risk management plans of all parties and the resultant provisions of the BAA._ NIST [defines][5] different cloud deployment models. The most common are public and private, or some mix of those two that NIST defines as hybrid. Organizations can comply with HIPAA using any deployment model but there are different risks associated with each and it is the job of the covered entity and business associate to properly assess the risk when selecting the proper deployment model. I would have preferred HHS go further and call out [single-tenant and multi-tenant in regards to HIPAA and cloud][6].
* **SLAs need to align with BAAs.** From the guidance, _If a covered entity or business associate enters into a SLA with a CSP, it should ensure that the terms of the SLA are consistent with the BAA and the HIPAA Rules._ This is something that many business associates don't do but should. The core of this guidance is that the SLA from a CSP should ensure that access to ePHI is not restricted due to excessive downtime.
* **Security and breach reporting should be very specifically defined.** From the guidance, _The Security Rule, however, is flexible and does not prescribe the level of detail, frequency, or format of reports of security incidents, which may be worked out between the parties to the business associate agreement (BAA)._ With ePHI moving between CSPs (think APIs and [Blank-as-a-Service][7]), it's imperative that each party knows what it is responsible for reporting. Reporting is essential to investigating and shutting off breaches.
* **Cloud service providers do not need to store ePHI for some period of time.** From the guidance, _No, the HIPAA Rules generally do not require a business associate to maintain electronic protected health information (ePHI) beyond the time it provides services to a covered entity or business associate._ This [not news][8] to us but it something that is frequently misunderstood about HIPAA so it's good that HHS called this out for CSPs.
* **It's ok to use servers outside the USA. **From the guidance, _Yes, provided the covered entity (or business associate) enters into a business associate agreement (BAA) with the CSP and otherwise complies with the applicable requirements of the HIPAA Rules._ This surprised me a little. Not because I don't agree with HHS but because I have a hard time imagining the use case for this. We have global customers, particularly in the life sciences arena, who need global deployments. In those cases, we deploy separate apps and databases across different regions depending on where end users reside. All customers we have that work with US citizens are deployed in US data centers.
* **Documentation of security practices is not required from cloud service providers.** From the guidance, _The HIPAA Rules do not expressly require that a CSP provide documentation of its security practices to or otherwise allow a customer to audit its security practices._ This type of documentation, while not required, may still be needed by covered entities and business associates based on the their determination of risk.

## What was not in the guidance?

I think a few things were missing and that HHS didn't go far enough.

1. **Define compliance inheritance.** I think HHS could go further here. HITRUST is a [good example][9] by incorporating the concept of inheritance into the CSF. Inheriting aspects of HIPAA is a core part of cloud deployments and should be addressed by HHS.
2. **Address questions about multi-tenancy.** This is probably the most frequent question when it comes to ePHI + cloud. It would have been good to have official guidance as a part of the cloud guidance from HHS.
3. **Start moving towards a universal, readable BAA.** The BAA [template][10] that HSS has on it's site, while useful in its generalizability, is too broad. There are things we know about the cloud and one of them, related to inheritance above, is that different parties can own different obligations. Creating a universal BAA, even if HHS is just the convener of industry leaders, would go a long way to helping healthcare move to the cloud in a safe way.

Healthcare, and it's data and applications, are slowly but surely embracing the cloud. The recent guidance from HHS has gotten a lot of attention. Hopefully this summary was helpful. If you have any other questions, reach out to us at [hello@catalyze.io][11].

[1]: http://www.hhs.gov/hipaa/for-professionals/special-topics/cloud-computing/index.html
[2]: http://www.athenahealth.com/
[3]: https://www.coalfire.com/
[4]: https://policy.catalyze.io/#compliance-inheritance
[5]: http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf
[6]: https://catalyze.io/learn/hipaa-and-multi-tenancy
[7]: http://content.catalyze.io/blog/inheritance-and-ownership-of-compliance-risk
[8]: http://content.catalyze.io/blog/how-long-to-keep-medical-records-under-hipaa
[9]: http://content.catalyze.io/blog/hitrust-inheritance-the-most-important-compliance-announcement-of-the-year
[10]: http://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html
[11]: mailto:hello%40catalyze.io
