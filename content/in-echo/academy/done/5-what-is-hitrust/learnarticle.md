---
Title: "What is HITRUST?"

Author: travis

Date: 04/22/2016

Tags: HIPAA

---
> The reason a lot of people do not recognize opportunity is because it usually goes around wearing overalls looking like hard work. – Thomas A. Edisons



The term “HIPAA compliant” gets thrown around a lot—by vendors, consultants, developers, audits, and others. The problem with the free flowing nature of the term is that “HIPAA compliant” is subjective. The only way to [prove][1] compliance is to complete—and pass—an external audit, preferably one conducted by a reputable audit firm with HIPAA experience.



Because of the subjective nature of HIPAA and variability in audits (as a former info sec auditor I feel qualified in saying that), [covered entities][2] have a hard time assessing compliance and security for external vendors as well as internal projects (think innovation groups and research). Oftentimes the result is a re-invention of the wheel every time a vendor sells to a new covered entity and every time a covered entity assesses the security of a new vendor. It’s incredibly inefficient and ripe with opportunities to miss things; missing things with security and compliance expose covered entities to significant risk. Enter HITRUST, an industry-driven effort to standardize on a common, certifiable framework to benefit both vendors and covered entities.



(image: slide1.png width: 50% height: 50% class: centered)



(image: slide2.png  width: 50% height: 50% class: centered)



### Introduction to HITRUST



[HITRUST][3], or the Health Information Trust Alliance, is actually not a framework at all, but the organization that created and maintains the Common Security Framework, or [CSF][4]. The CSF, currently in version 7, is a certifiable framework that brings together, or harmonizes, several other compliance frameworks and standards including HIPAA, PCI, ISO, and NIST. By “harmonize” the CSF maps all of those standards together, with the CSF as the central mapping key.



According to its website, HITRUST, and its corresponding CSF, “was born out of the belief that information security should be a core pillar of, rather than an obstacle to, the broad adoption of health information systems and exchanges.” Security and compliance are a key part of the success of health technology; they cannot be ignored or treated as an afterthought. Without a standardized framework, process, and certifying body, HIPAA is often an obstacle for healthcare technology. HITRUST is an attempt to help vendors better prove their security and to help covered entities streamline security and compliance reviews of vendors. In that attempt, HITRUST is succeeding. More and more health systems are asking for HITRUST and vendors that have it are moving more quickly through the process with covered entities.



(image: slide3.png width: 50% height: 50% class: centered)



(Image credit: [HITRUST CSF Assurance Program][8])



### CSF Domains and Controls



The CSF is divided into 19 different domains. In contrast to HIPAA, the CSF does not create broad buckets like Administrative and Security controls.



* Information Protection Program

* Endpoint Protection

* Portable Media Security

* Mobile Device Security

* Wireless Protection

* Configuration Management

* Vulnerability Management

* Network Protection

* Transmission Protection

* Password Management

* Access Control

* Audit Logging & Monitoring

* Education, Training & Awareness

* Third Party Security

* Incident Management

* Business Continuity & Disaster Recovery

* Risk Management

* Physical & Environmental Security

* Data Protection & Privacy



In addition to the above domains, HITRUST has 135 specific controls.



### CSF Levels of Implementation



For each of the 135 controls defined by HITRUST, there are 3 distinct implementation levels. Each implementation level builds on the one below - level 2 includes all of level 1 plus additional requirements, level 3 includes all of level 2 plus additional requirements. So technically level 3 is the most stringent set of requirements. Most organizations have varied levels of implementation for different controls and are not just level 1 or 2 or 3 across the board.



I think this is the area in which there is the most confusion about HITRUST, or at least the area in which we get asked most about our own HITRUST CSF Certification. The start of every HITRUST assessment, regardless of the type of assessment (see Degrees of Assurance below for more on that), is gathering information about the entity being assessed. This information is used to assess the organization, system, and regulatory requirements for the assessment. Conceptually, the risk or scope of the assessment is being determined.



This step is also written into HIPAA but is not a part of most assessments. HIPAA allows for controls that are reasonable and appropriate. In the words of HHS `An important step in protecting electronic protected health information (EPHI) is to implement reasonable and appropriate administrative safeguards that establish the foundation for a covered entity’s security program.` Most HIPAA assessments are one size fits all because there is no framework to interpret `reasonable` and `appropriate`; in the end, it’s likely a good thing that those aren’t interpreted.



In determining the implementation level, HITRUST dynamically sets requirements for each organization and each assessment. Like the CSF more broadly, it’s a standardized process for determining implementation level.



### CSF Degrees of Assurance



HITRUST offers 3 different Degrees of Assurance, which are essentially levels of assessment. The Degrees of Assurance align with cost, level of effort, amount of time, and rigor. Each level builds on the one below. For reference, Catalyze has completed a CSF Certified assessment, which is the highest Degree of Assurance.



The following options exist for Degrees of Assurance, starting with the least cost, effort, time, and rigor.



1. **Self Assessment.** This is simply an organization completing CSF on its own. It is valuable, typically as an internal tool for the organization, because it’s done again a standardized framework. There are no external parties that verify any aspects of the assessment. It results in a HITRUST issued CSF Self Assessment Report.



2. **CSF Validated.** This, and the CSF Certified option below, requires a 3rd party CSF Assessor to verify the information gathered by the organization completing the assessment. The CSF Assessor is [approved][5] by HITRUST. This Degree of Assurance requires an onsite visit by the CSF Assessor. HITRUST reviews the completed and validated assessment and issues a Validated Report as the outcome.



3. **CSF Certified** Similar to the CSF Validated assessment, the organization undergoing the assessment is granted a HITRUST CSF Certification that is good for two years. The major differences for this Degree of Assurance is that the organization granted HITRUST CSF Certification meets all of the certification requirements of the CSF. This builds on the CSF Validated assessment in that HITRUST reviews and certifies the entries of the organization and the validation of the 3rd party assessor. In the case of Catalyze, this final step for certification took 3-4 months.



### PCI for Healthcare



There are parallels between HITRUST and PCI. For those that are not familiar, PCI is the compliance framework for the financial and payments processing industry. Achieving PCI compliance is very involved, similar to a Certified HITRUST Assessment. Whereas HIPAA was written and is technically enforced by the federal government (HHS specifically), the CSF was written and is maintained by HITRUST, which is [governed][6] by a representative body from the healthcare industry.



In many ways, HITRUST is an attempt by the healthcare industry to create a standardized, PCI-like certification. In terms of enforcement, the healthcare industry, as opposed to HHS, is meant to enforce HITRUST by requiring Certified Assessments of business associates and subcontractors. There are still gaps in adoption within the healthcare industry, but the tide is clearly turning as more and more entities are expecting vendors to be HITRUST CSF Certified.



### HITRUST vs HIPAA



As mentioned above, HITRUST builds on HIPAA. It takes HIPAA, a non-standardized and non-prescriptive compliance framework, and creates a standardized compliance framework, assessment, and certification process for the healthcare industry. In the process it “harmonizes” HIPAA with other compliance frameworks such as PCI and NIST. HITRUST also adapts requirements for certification to the risks of an organization based on organizational, system, and regulatory factors.



As opposed to HIPAA, which has defined penalties for security breaches, the enforcement of HITRUST is dependent on the healthcare industry itself, typically covered entities like hospitals and payers, requiring HITRUST CSF Certification of vendors. HITRUST has gained adoption quickly in healthcare and we are seeing it more and more as an expectation for vendors. While not always required as a step in implementing a new technology, HITRUST certainly streamlines the security and compliance step in the implementation process.



Having been through both HIPAA audits and a Certified CSF Assessment, it is safe to say that HITRUST CSF Certification is a much more rigorous process, with a higher burden of proof put on the organization trying to achieve certification, than a HIPAA audit. Achieving HITRUST CSF Certification requires significantly more time, effort, and resources than a HIPAA audit. Being HITRUST CSF Certified should be seen as a more significant badge for security and compliance than completing a HIPAA audit.



If you are considering or have completed a HITRUST assessment, feel free to [reach out][7] with questions or feedback.



[1]:	https://catalyze.io/learn/proving-hipaa-compliance

[2]:	https://catalyze.io/learn/the-hipaa-privacy-rule

[3]:	https://hitrustalliance.net/about-us/

[4]:	https://hitrustalliance.net/hitrust-csf/

[5]:	https://hitrustalliance.net/csf-assessors/

[6]:	https://hitrustalliance.net/about-us/board-directors/

[7]:	mailto:hipaa@catalyze.io

[8]:	https://hitrustalliance.net/content/uploads/2014/04/BA-1-Understand-the-CSF-and-CSF-Assurance-Program.pdf