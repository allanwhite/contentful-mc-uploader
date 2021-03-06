---
Title: How the Epic/Healthkit integration actually works
SeoTitle: How the Epic/Healthkit integration actually works
Author: mark
Date: 10/28/2014
Summary: Info on how Epic/Healthkit integrations might work.
Lead: |
  There's been no shortage of pieces on how the Epic/Healthkit integration _might_ work or should _work_. Even the piece in which [Epic spokespersons talked about functionality](http://venturebeat.com/2014/09/17/ehr-giant-epic-explains-how-it-will-bring-apple-healthkit-data-to-doctors/) points to how "the EHR accesses HealthKit data from the MyChart app, not via a direct integration with the HealthKit platform." Ok, so it uses MyChart, Epic's patient portal. But saying that MyChart is used for integration is like saying that souffle is made because a pan interfaces with a stove. What you really need to know are the ingredients and how they mix together. We've got the scoop.

Tags: epic, healthkit
Category: company
Fullname: Mark Olschesky
---
The first thing worth noting about the Epic/Healthkit integration is that *it is not patient-initiated*. Any user using the MyChart application on an iPhone running iOS 8 cannot decide to send information to their clinicians. Epic won't store it; in fact MyChart won't even show you the activity in MyChart unless a clinician has ordered MyChart tracking for you. You've been looking for real, prescribed apps? Here's the first one.

While this may disappoint patients looking for a new communication tool, this makes alot of sense for doctors and clinicians. Many clinicians are afraid the upcoming "Internet of Things for healthcare era" will be a lot of static in ratio to noise. How can apps and EHRs guarantee clinicians only retrieve pertinent patient information from devices with intervention opportunity?

When a clinician orders the "Healthkit" prescription, it prompts the doctors to set usual specific limits for "abnormal" alerting of tracked values. This is the killer feature. For a non-diabetic, a blood glucose level of 130 mg/dl would be abnormal. But, that's not who providers are concerned about. For a diabetic, a provider might want to dictate what they believe "abnormal" is for a specific patient. Maybe it's a blood glucose over 160 mg/dl. Maybe it's a blood glucose of 200 mg/dl. Existing EHR decision support/order recommendation tools can be used to provide high-level guidelines for tracking, but letting clinicians dictate what _they_ should warned about on a patient-by-patient level makes this tool truly useful.

The somewhat comical thing about this is that it requires the clinician to ascertain that the patient is using an iPhone running iOS 8 to use Healthkit. When Travis and I were chatting about this yesterday, he mentioned that he was looking forward to teasing his doctor colleagues on talking with their patients about what phone they used.

_"I'm sorry, there was nothing we could do for the patient. We tried our hardest, but they had an iPhone 4S. We can't get their data."_

Once the order is signed by the clinician, it goes through some Epic programming magic. The next time the patient signs into MyChart on their iPhone, they'll see the "Track my Health" feature. From there, clicking it allows the patient to pick the tracker prescription the doctor ordered. Clicking on that moves the patient over to Apple's Healthkit where Apple verifies that the user is going to share the requested data with MyChart. Once that is done, anytime a entry from a glucometer or smart scale goes into Healthkit, it sends the data to MyChart which then sends the data to Epic. If the data is abnormal, it lets the responsible clinician know through the EHR inbasket. Since the patient already has MyChart, the clinician could send the patient a message securely back to the patient with feedback or an Action Plan through secure messaging.

### What does it all mean?

My thoughts:

- App prescribing is here, and this is how it works. Apple has the first integration, but it seems like Epic is going to own some part of this workflow. There's been a few startups whose plan has been to prescribe apps; there will still be room for security/auditing/certification but the app prescription path (at least for Epic) will run through the EHR's order entry. It'll be interesting to see the process in which hospitals can petition Epic to select new apps and platforms (like Validic) to receive patient data.
- It would be hard for other EHR/Patient Portal combos to replicate something like this. Epic has a pretty tight coupling between the EHR and their patient portal that other vendors would need to accomplish via some interfaces or custom APIs.
- Traditional integration is still alive. MyChart/Healthkit helps your app write data to MyChart, but doesn't provide any controls to request patient data from it. If you want to get data out of the EHR, you'll need to do integration. If you want to get patient data into the EHR without any of the afforementioned steps, you'll need a traditional flowsheet/notes interface. Need help with that? [We can help.](http://catalyze.io/hl7)
