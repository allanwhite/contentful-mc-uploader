---
Title: How long to keep medical records under HIPAA?
SeoTitle: How long to keep medical records under HIPAA?
Author: travis
Date: 04/17/2014
Summary: 
Lead: |
  It may come as a surprise, but you don't have to retain medical records according to HIPAA rules. This is a very common misconception with HIPAA. Medical records means electronic protected health information (ePHI) in this case. HIPAA does not have any rules that require covered entities or business associates to retain ePHI. I assume this is a common question for HHS as they have it listed in a [FAQ](http://www.hhs.gov/ocr/privacy/hipaa/enforcement/examples/disposalfaqs.pdf).

Tags: hipaa, data, ephi, policy
Category: company
Fullname: Travis Good, MD
---
(image: retention.png)

The confusion likely stems from two things. First, most states have requirements that covered entities retain ePHI for a certain period of time, even if the covered entity closes its doors; I imagine the most common case of a covered entity closing is a physician retiring. As a covered entitiy, the onus is on you to understand the requirements in the states that you work in and to comply with them.

This is a case I'm personally exposed to right now as a doc friend is retiring and is trying to figure out what to do with his medical records for the next 10 years. His records are all paper and he's retiring to avoid having to use an EHR. Yes, this does happen and some doctors feel so strongly, in a bad way, about EHRs that they are are retiring early to avoid having to change the way they've practiced for 30, 40, or even 50 years.

There are issues that arise when a business associate, such as an EHR company, goes out of business and the covered entity needs to get the records and find a way to store them. We've seen this experience too, especially in the case of smaller, specialty specific EHRs and practice management systems. More on this in another post.

The second reason for the misconception about HIPAA and retention of ePHI is that HIPAA does have data retention rules but, oddly enough, they don't apply to ePHI. **Section 164.316(b)(1)** of HIPAA require orgs:

> “(i) Maintain the policies and procedures implemented to comply with this subpart in written (which may be electronic) form; and (ii) if an action, activity or assessment is required by this subpart to be documented, maintain a written (which may be electronic) record of the action, activity, or assessment.”

**Section 164.316(b)(2)(i)**`` goes on to state:

> “Retain the documentation required by paragraph (b)(1) of this section for 6 years from the date of its creation or the date when it last was in effect, whichever is later.”

There are lots of policy and documentation requirements in HIPAA, and the rules around data retention apply to those. You should be maintaining all of your policies and documentation that address aspects of HIPAA, and you should plan to retain it all for 6 years at a minimum. You should also maintain all risk assessments, audits, and other documentation related to your organization.

##Catalyze policy and documentation retention

At Catalyze we use Git for version control on our policies, and the current versions are written in Markdown and maintained in a Master branch. More on why we do this in a separate post.

We backup our current policies using Box. For risk assessments, change and configuration management, vulnerability scanning, and audits we also use Box as a repository. You can see our current policies here - [catalyze.io/policy](https://catalyze.io/policy/).

