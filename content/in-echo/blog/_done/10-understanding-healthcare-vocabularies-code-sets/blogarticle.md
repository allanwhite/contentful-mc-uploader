---
Title: Understanding Healthcare Vocabularies & Code Sets
SeoTitle: Understanding Healthcare Vocabularies & Code Sets
Author: mohan
Date: 11/18/2013
Summary: Developers coming into healthcare are often confused as to why it's so difficult to get data in and out of backend "systems of record" like EMRs.
Lead: |
  

Tags: codeset, icd10, icd9, loinc, snomed-ct, vocabularies
Category: company
Fullname: Mohan Balachandran
---
#### What are they, why they're important and how they're used

Things have been really hectic with fund raising, working with our initial customers (enterprises and developers / agencies), writing requirements, testing... It's not that these are slowing down, it's just that I've decided to set myself a goal of writing at least one blog post every week and ideally move to a goal of 500 words a day.

The latter might be a challenge and perhaps more suited to professional bloggers but I think it is feasible as long as I just commit to it. I was also in part inspired by these two folks ([180 websites in 180 days](http://blog.jenniferdewalt.com/post/56319597560/im-learning-to-code-by-building-180-websites-in-180) and [177 days of consecutive github commits](https://ryanseys.com/blog/177-days-of-github/)).

Anyway, back to this post and the topic in particular. I initially wanted to write about data, security and access as related to healthcare and HIPAA. But I realized that developers coming into healthcare are often confused as to why it's so difficult to get data in and out of backend "systems of record" like EMRs (Electronic Medical Records), PMS (Practice Management Systems) etc. Database types and structures, data dictionaries, policies and so on do play an important role in accessing data of course but equally important factors are codes and value sets used by the various systems. Hence the topic of this post.

#### A listing of terms and vocabularies

Firstly, here's a list of the most common and increasingly mandated and generally accepted codesets. They are all linked to the appropriate browsers where possible so that you can get a better idea as to what they look like.

- SNOMED-CT or Systematized Nomenclature of Medicine - Clinical Terms: SNOMED-CT is a comprehensive vocabulary that covers almost every aspect of clinical care - ranging from anatomy to diagnoses to observations and procedures. SNOMED-CT requires a licenses but since the US is a participating country in [IHTSDO](http://www.ihtsdo.org/), it can be used freely after accepting a simple license agreement. There are no fees to use this in any commercial application.(see the download link for more info). [Website](http://www.ihtsdo.org/snomed-ct/snomed-ct0/), [Browser](http://bioportal.bioontology.org/ontologies/SNOMEDCT?p=classes), APIs - APIs are available for query. See blog post here and [register for access](http://developer.catalyze.io/), [Download](http://www.nlm.nih.gov/research/umls/licensedcontent/downloads.html).
- LOINC or Logical Observation Identifiers Names and Codes. This is meant primarily for laboratory and clinical observations. It was developed by the [Regenstrief Institute](http://www.regenstrief.org/). Note that LOINC doesn't have codes for anatomy for one. But, as you can imagine, there is some overlap with SNOMED-CT. There was a recent agreement announced for the two creating bodies to work together to map and link SNOMED-CT and LOINC. The use of LOINC is also possible with the acceptance of a simple license agreement. There are no fees to use this in any commercial application. Website, Browser, APIs - APIs are available for query. See blog post here and [register for access](http://developer.catalyze.io/), [Download](http://loinc.org/downloads)
- ICD 9 and 10 - The International Classification of Diseases. It was developed and is managed by the World Health Organization. It was initially developed for epidemiology but has since evolved significantly. The US was / is one of the last to switch over to the latest version, ICD-10. ICD-10 was complicated as it introduced a lot more detail (for example, it's codes allow one to distinguish between the right and left lobes of a lung and even more granularly) and an almost 10x increase in codes which is why its rollout in the US was delayed and is still problematic. The use of ICD 9 and 10 is also possible with the acceptance of a simple license agreement (see the download link for more info). No fees are needed to use this in any commercial application [Website](http://www.who.int/classifications/icd/en/), [Browser](http://apps.who.int/classifications/icd10/browse/2010/en), APIs - APIs are available for query. See blog post here and register for access, [Download](http://www.nlm.nih.gov/research/umls/licensedcontent/downloads.html).
- CPT - Common Procedure Terminology. It was developed and is maintained by the American Medical Association AMA. CPT coding is similar to ICD-9 and ICD-10 coding, except that it identifies the services rendered rather than the diagnosis on the claim. ICD code sets also contain procedure codes but these are only used in the inpatient setting. There is a necessary license agreement for any use and a fee for usage as well (see the download link for more info). Website, [Browser][cpt], Download
RxNORM - RxNorm provides normalized names for clinical drugs and links its names to many of the drug vocabularies commonly used in pharmacy management and drug interaction software, including those of First Databank, Micromedex, MediSpan, Gold Standard, and Multum. By providing links between these vocabularies, RxNorm can mediate messages between systems not using the same software and vocabulary. Website, Browser, APIs - APIs are available for query. See blog post here and register for access, Download
- HL7 - Health Language 7. This is more of a messaging and interoperability oriented standard and organization. It is the most common standard set for exchanging data between clinical systems. There are multiple HL7 message standards. However, HL7 has had to evolve to include codesets to enable this exchange. Website, Browser - none, Download - you must be a paid member to access and use it.
- Other codesets - There are others of course. Often there are specific codesets which are mandated for use in a particular context. For example, for immunizations, interoperability and Meaningful Use required the use of the CVX codeset which is put out by the CDC. These are all accessible at via the links below. Website, Browser, APIs - APIs are available for query. See blog post here and register for access, Download

#### The need for codes and coding vocabularies

Codes came about first to ensure that claims could be paid. Insurance organizations, whether they be Medicare or a private payer, had to have a way to understand what the specific procedure performed on the patient was (there is a difference between an MRI - Full body scan vs. just a Head and Neck and so on). To ensure that physicians were being paid the correct amount, the specific procedure had to be "coded" so that everyone knew exactly what had happened.

Now that there are several standards (as listed above), there is ongoing work to map these various vocabularies / codesets so that one can move easily from one to the other as long as one of the key ones listed earlier are used. There is work that has been done and is ongoing such as

- CMS - mapping between [ICD-9 and ICD-10](http://www.cms.gov/Medicare/Coding/ICD10/2014-ICD-10-CM-and-GEMs.html)
- National Library of Medicine - [LOINC and CPT](http://www.nlm.nih.gov/research/umls/mapping_projects/loinc_to_cpt_map.html)
- Regenstrief and IHTDSO - [LOINC and SNOMED](http://www.regenstrief.org/news/new-regenstrief-and-ihtsdo-agreement-make-emrs-more-effective-improving-health-care/)

At Catalyze, we wanted to simplify a lot of this confusion and terms. We have launched our API which allows querying each of the above listed codesets (except CPT - which requires a license for each user). Our CTO Web Services, Ben Uphoff, has a great write-up on the technology behind making this happen in an extremely responsive and scalable manner. The APIs are also available once you register. [Please do so](https://developer.catalyze.io/request-invite) and let us know what you think.

#### What's the value of these APIs?

Well, firstly, these are painful to download and use. As a developer, you would have to identify which specific ones you need for which specific fields in your data model. There are codesets specified for even seemingly trivial things like gender.

Secondly, these codesets change. For example, gender mentioned above used to offer male, female, ambiguous, transexual etc. as valid values with associated codes. Now, the standard expected only offers three choices - male, female and undifferentiated. SNOMED-CT, LOINC, RxNORM all continue to evolve as well. Especially RxNORM as more drugs are introduced into the market with associated codes, active ingredients etc.

Thirdly, if the data is coded uniformly within your app or apps, then analytics and any other backend process that you wish to perform becomes a lot easier.

Fourthly, if your app data is coded properly, then an enterprise conversation becomes a lot easier because there is no need to map to those standards later.

Fifthly, lookups and look-ahead functionality in any form in your app or website. Want to or add collect a medication list, just do a lookahead using our API routes for RxNorm.

And lastly, in the next version of the API that we're working on (v2.x), you will be able to use one of the pre-built models (for user, allergies, medications and so on) to quickly create a form to capture whatever elements of data you think are needed for your app. And validations for each of these elements will be built in.

Building compliant apps is hard, and that's where we started at Catalyze; but, adding interoperability and meaning to data collected, imported, or exchanged is also a huge challenge when building health apps. We have a lot more coming to simplify working with health data so stay tuned, or register and start building today!

