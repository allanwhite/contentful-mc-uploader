---
Title: Customizable HIPAA
SeoTitle: Customizable HIPAA
Author: travis
Date: 10/21/2013
Summary: Minimizing risk and maximizing protections for patient data.
Lead: |
It might seem strange but communicating directly with individuals about their health is a pretty new concept. It's part of larger trends in healthcare that put the patient in more control of their data, and make the patient a more informed and active member of the care team. Patient activation and engagement are not the subjects of this post, though they are near and dear to our hearts at Catalyze.

Tags: engagement, hipaa, sms, learn
Fullname: Travis Good, MD
---
Whatever the reason driving new forms of communication and touch points with patients, the privacy and security aspects of HIPAA make healthcare communication different from personal communication in other verticals. It's not quite as easy to implement 2-way SMS with your physician as it is for your wireless carrier to do SMS surveys for feedback. One of the things that makes HIPAA really interesting, and really challenging in some respects, is its flexibility. Much of HIPAA, especially the Security Rule, isn't prescriptive about the specific types of technologies that need to be used, or the specific settings for systems used to transmit, process, or store protected health information (PHI). On top of that, HIPAA allows patients to opt-in or agree to certain types of communication as long as those patients are given a basic understanding of the risk associated with those communication mediums. Many patients are OK with emails, or even SMS messages, for health. It's certainly much more efficient and effective than the paper mail that dominates healthcare today.

In fact, a very interesting [project](http://www.medstartr.com/projects/188-hacking-hipaa), which didn't get funded, set out to create a standards Notice of Privacy Practices (NPP) that would standardize the way in which patients choose communication preferences. Unfortunately the project didn't reach it's funding goals but the idea to create standard processes and language for patient privacy preference is well timed.

So theoretically you, as an individual, could opt-in to receiving PHI through SMS ("Hello Mr. Smith! It's time to take your lisinopril. Reply 1 if taken, 2 if not."), despite the fact that SMS violates some prescriptive HIPAA security rules around encryption. That' great! And it's very helpful for healthcare developers and enterprises that want to engage patients because snail mail or portal mail (where uses have to log in to a secure portal to access a message) do not equal stickiness for an engagement campaign.

But having a patient opt-in to SMS or email or Push or any number of other delivery methods does not mean that the technology behind the message can violate the HIPAA security rule. It also doesn't mean the patient opted-out of the same security controls associated with handling ePHI. It just means that SMS can be used to deliver health-related messages to the patient.

SMS is a good example because there are very successful, and popular, SMS delivery services, Twilio and Plivo being the biggest, that can be used to deliver SMS (or voice). But, according to the new HIPAA Omnibus rules, those delivery services are still considered subcontractors and subject to the same rules and risks of any other business associate in the eyes of HIPAA and HHS. ePHI passes through, and is typically queued, on systems while awaiting delivery. Email delivery is very similar to SMS in these ways, just replace Twilio and Plivo with Mailgun and Postmark. Push too.

So what can you do as a developer? It's a matter of being thoughtful about who you work with and understanding where PHI flows. Many infrastructure companies understand the unique needs in healthcare and the broadened scope of HIPAA. But, at the same time, you have to be proactive when you work with vendors to assure you minimize risk and maximize protections for patient data.

