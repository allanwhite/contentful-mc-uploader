---
Title: Should I Delete Healthcare App Data?
SeoTitle: Should I Delete Healthcare App Data?
Author: mark
Date: 06/09/2014
Summary: 
Lead: |
  If you're flipping through the Catalyze compliant API [documentation](https://docs.catalyze.io/), one of the things that you'll notice is that we've given you the ability to delete any data that you wish to delete. We advise you that the deletion is permanent; **you know that we mean it because we put the font in all bold at that part**. However, at the end of the day, you're the boss. You're building your own product and we've given you the means to manage your data as you wish.

Tags: hipaa, Legal medical record, standards, app design, api
Category: company
Fullname: Mark Olschesky
---
But, if this is your first time building a healthcare application, or maybe if you're looking for a refresher, you might be asking yourself "How long am I (and my customers) actually required to maintain PHI? Do we have to maintain PHI at all?". The answer isn't necessarily straightforward, but I'll try to walk you through some basic rules and thought processes on the topic. We'll hit some jargon along the way, and I'll try to explain things as I go along.

The first thing to understand when discussing the longevity of PHI is to understand that most of the rules that govern the maintenance of PHI were written before the prevalence of Electronic Medical Records and computers. It wasn't that long ago that thick paper charts were the norm instead of the outlier. Paper degrades over time and requires a massive amount of space to store. Paper records went from being in the office, to being in some storage facility, to generally discarded after they had outlived their usefulness. It was much more expensive to store paper than files on a server, so laws and regulation are generally empathetic to this problem.

So what does HIPAA say? Well, HIPAA doesn't actually provide any guidance on how long you need to maintain PHI itself. 45 CFR §164.530(j) instructs Covered Entities that they need to maintain their HIPAA documentation, policies, signed BAAs and disclosure authorizations for six years and that they must provide patients with copies of their medical records for up to six years as long as they maintain them[^1]. But, the actual requirements on the maintenance of PHI vary by state and payer. For example, the Medicare Conditions of Participation require hospitals to maintain "legal medical records" for a minimum of five years. That covers most doctors and hospitals, so that's a safe place to start. Individual states, medical boards and associations may have their own regulations as well. The California Medical Association states that maintaining medical records for 10 years is sufficient, while it recommends maintaining them forever[^2]. Since we're working with computers, we don't realistically need to worry about space. As such, a good rule of thumb for Electronic Data **is that you probably shouldn't delete any PHI used for "medical decision making" ever**, if possible. This includes erroneous data that is addended later in documentation since you want to show an accurate log of what clinicians saw and used to inform decision making as they were making decisions.

##Should I ever delete data?

Is there ever a scenario where you might want to purposefully delete data within Catalyze data models? I can think of one that's pretty common in obstetrics software. In the era of paper charts, it was common for obstetricians, midwives and their staff to place a post-it note on top of their paper charts. While inside the paper chart was vitals, results and visit notes, the post-it note contains information that wasn't really used for medical-decision making but was necessary information for doctors and midwives to not appear clueless during the course of care. Some types of information stored here might be:

* "The patient informed me that the father is not the man coming with her to visits, so don't discuss paternity information during the visit."

* "The patient plans on putting the baby up for adoption after birth, but hasn't told their parents yet and the patient is on their parents insurance."

* "Child Protective Services was involved with the spouse of their last child, so be on the lookout for signs of abuse."

In the paper world, this post-it note would literally be thrown away at the end of the pregnancy. So, when software wizards came and said "Oh, you can keep those post-it notes in a way that's always audited and stored", end-users revolted. They didn't want to be liable for knowing these details and they didn't believe it was part of the Legal Medical Record [^2][^3][^4]. So, vendors changed the software so that it supported the needs of the users: the software would audit the changes to the "post-it note" data during the pregnancy while deleting it at the end of the term.

##What to do instead of deleting data

What should you do instead of deleting data when you don't want old data displaying in searches? I'd consider thinking more about what invalidates the data and specifying that in the "extras" of that data class and filtering based upon that criteria. For example, if a provider is no longer with an organization, you can create a field to "deactivate" the user instead of deleting it. That way you can piece together data about the clinical flow together as needed.

Advice contained within this article should not be construed as legal advice. We're more than happy to help you narrow and define your data strategy on the Catalyze API in regards to PHI and the Legal Medical Record.

[^1]: http://www.hhs.gov/ocr/privacy/hipaa/understanding/training/adminreq.pdf and http://www.asha.org/slp/RecordRetention/

[^2]: http://www.thedoctors.com/KnowledgeCenter/PatientSafety/articles/CON_ID_001849#3, also you can see the regulation from a few other agencies

[^3]: Texas Medical Board here: http://www.texmed.org/template.aspx?id=1556

[^4]: New York State: http://www.health.ny.gov/professionals/doctors/conduct/frequently_asked_questions.htm#retention_of_medical_records
