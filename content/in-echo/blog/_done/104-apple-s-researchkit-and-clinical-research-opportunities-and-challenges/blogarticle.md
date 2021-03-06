---
Title: "Apple's ResearchKit and Clinical Research: Opportunities and Challenges"
SeoTitle: "Apple's ResearchKit and Clinical Research: Opportunities and Challenges"
Author: mohan
Fullname: Mohan Balachandran
Date: 04/06/2015
Summary: 
Lead: |
  > "Thar's gold in them thar hills!"

Tags: Research, ResearchKit, Apple
Category: company
---
> — Mulberry Sellers, Mark Twain's A Gilded Age.

Apple [announced](https://www.apple.com/pr/library/2015/03/09Apple-Introduces-ResearchKit-Giving-Medical-Researchers-the-Tools-to-Revolutionize-Medical-Studies.html) ResearchKit on March 9. Since then, there has been a flurry of blog posts and discussions around its value and impact. I'll go into more detail on that below but the main thing is that this is the first time a **significant** player in the consumer ecosystem has stepped into the esoteric world of clinical research. The product being offered does have limitations around code, technology and liability—all of which can be addressed. That Apple is willing to step up and help improve medical research, an area desperately in need of change, is heartening and will, I'm willing to bet, cause Google and others to step up as well.

The purpose of this article for is to provide a better, and perhaps more nuanced, understanding of:

1. The world of clinical studies;
2. Which *types* of clinical studies ResearchKit in conjunction with HealthKit might be best suited for initially; and
3. What the future of clinical studies (no matter the type) could look like with ResearchKit and similar solutions from other providers.

I won't cover what ResearchKit provides in detail. Although we're beginning work on that at Catalyze, we'll wait until Apple open sources it (another big win) before delving into it in more detail.

So let's jump right in...

### The world of clinical studies

There are several *types* of clinical studies. [Clinicaltrials.gov](https://clinicaltrials.gov) categorizes them into three buckets:

- [Observational Studies](https://clinicaltrials.gov/ct2/about-studies/glossary#observational-study): This is the *simplest* study (this is very relative - I do not intend to imply these studies are trivial by any means). The goal here is to collect data on effectiveness / outcomes related to a particular disease, intervention (use of a drug, life style changes such as exercise or diet etc.) or diagnostics (choice of screening method - e.g. BMI vs. blood test, frequency - e.g. every three months vs. annually and more). Patients **do not** get allocated to different groups, each with different interventions. Think of this more as a data collection exercise used to generate hypotheses which can be further tested and verified with stronger evidence. Which bring us to...
- [Interventional Studies (or Clinical Trials)](https://clinicaltrials.gov/ct2/about-studies/glossary#interventional-study): These are the clinical trials we've all heard about lasting multiple years, costing billions of dollars and driving up the cost of brand name drugs. It's an intensive process with significant oversight and regulation (to ensure data is not massaged or faked, which falls under CFR 21 - Part 11) across multiple phases (to evaluate impact of dosage levels - Phase 1, to evaluate impact of various dosage levels - Phase II etc.). This is a much more rigorous study intended to gather statistical **evidence** (double blind studies, placebos,  etc.) *proving* that a particular interventional does / will have a statistically significant impact on outcomes.
- [Expanded Access](https://clinicaltrials.gov/ct2/about-studies/glossary#expanded-access): If patients have a serious life-threatening disease and there is an insufficiently large pool of patients to do a full fledged interventional clinical trial with all the associated A/B testing, placebo etc., patients can be enrolled in expanded access trials. This is heavily overseen and regulated by the FDA for obvious reasons.

That's a high level introduction to the different types of clinical studies and their relative effort. Based upon this information, you can draw an obvious conclusion that, for the immediate term, observational studies are the easiest area of ResearchKit applicability. The more data a researcher has, the better the likelihood a hypothesis is based on fact rather than gut. That is critical because, as mentioned earlier, the other two types of studies can get pretty expensive. I'll focus the rest of this post on observational studies and how Apple's ResearchKit and HealthKit can help.

Let's talk a bit about the challenges in the observational studies space (some of these will apply to all types of studies as well).

### Challenges

#### Recruitment

> "Join the army" they said, "it'll be FUN" they said.
> — Engineers, Company of Heroes

Recruitment is **THE** major bane of all clinical studies. Observational studies, specifically in cases when the intervention is a drug, rely on the fact that earlier interventional studies have already happened. How do people report unexpected adverse reactions? Turns out that an adverse event is [defined by the FDA](http://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/cfrsearch.cfm?fr=314.80) as any undesirable experience that can be associated with the use of a medical product in a patient. It can be anything from the product not working as intended to causing a serious, life-threatening reaction, or even death. That's a pretty broad range, and one aspect of patient self reporting which we all hear about.

The other aspect is reporting on outcomes. What is the impact of taking a particular medication vs others for the same condition, what is the impact of this amount of dosage vs. others? The more available data points, the more considered the hypothesis. And that is where HealthKit can play a significant role. Within a few hours of ResearchKit being announced, [multiple apps](http://www.bizjournals.com/boston/blog/health-care/2015/03/mgh-uses-apple-research-kit-to-redefine-research.html) reported thousands of sign ups, which has it's pros and cons:

#### Pros

	- *Easy to sign up*: [Thousands of people](http://www.macrumors.com/2015/03/11/researchkit-thousands-sign-up/) signed up within 24 hours of the announcement. Amazing. As a researcher notes in the [this](http://www.bloomberg.com/news/articles/2015-03-11/apple-researchkit-sees-thousands-sign-up-amid-bias-criticism) article, and I quote, "To get 10, 000 people enrolled in a medical study normally, it would take a year and 50 medical centers around the country...". That is astounding.
	- Anyone with an iPhone can now join
	- Some aspects of data gathering can be done passively (more in the next section)
	- All aspects of permissions are taken care of in-app
	- Various kinds of data gathering: voice, gait, entry etc. can all be addressed

#### Cons

	- *Verification & Matching*: Also a pro, anyone can sign up.  This ties to the aspect of data quality and reliability. Verification will remain an issue unless addressed explicitly. Lisa Schwartz, professor at the Dartmouth Institute for Health Policy and Clinical Practice, notes in the same Fortune article referenced earlier, "Just collecting lots of information about people—who may or may not have a particular disease, and may or may not represent the typical patient—could just add noise and distraction."
	- *Selection bias*: The simplest bias is only iPhone users can participate, which is not a broad enough sample. But that's addressable as soon as the rest jump on the bandwagon and Apple open sources ResearchKit. For a more in depth chat about biases, see [this](https://statsdoc.wordpress.com/2015/03/10/apples-researchkit-is-not-yet-ready-for-primetime-a-medical-researchers-perspective/) post from someone who works in the field on a daily basis. Note that he too is optimistic about the opportunity.

#### Gathering data

> "Human beings were not meant to sit in little cubicles staring at computer screens all day, filling out useless forms..."
> — Peter Gibbons, Office Space

At the core of it all, this is the rationale and enabler behind the quantified self movement. Capturing data cannot always be an active effort on the part of the patient. A significant amount of the data capture needs to be passive, or at least easy, to gather. Traditionally, the only way to capture this kind of data was to ask the patient to fill out lengthy forms weekly or as frequently as possible. The irony is if it is difficult enough for a physician to get a patient to adhere to medication prescriptions, what hope does a researcher have to ask patients to fill out a form regularly about the effects of that prescription?

And that is the second biggest innovation. The combination of HealthKit, Core Motion and ResearchKit make it possible to come up with innovations such as the [Parkinson's mPower app](http://parkinsonmpower.org/) which enables "innovative activity-based measurements of Parkinson symptoms that include a memory game, finger tapping, voice recording, and walking". There's more to come as developers dream up ways to combine the three solutions into a seamless patient experience.

It is worthwhile to note that two of the three (apart from ResearchKit) have equivalents in the Android world as well. The selection bias problem is not a long lived one by any means.

### The promise of Apple ResearchKit

> "Remember Red, hope is a good thing, maybe the best of things, and no good thing ever dies."
> — Andy Dufresne, The Shawshank Redemption

While a lot can be said about the negatives, or rather, the areas of improvement, ResearchKit has several things going for it, namely
- Apple: Having such a large organization put its weight and product behind healthcare research, is a huge step forward.
- Recruitment: See above not to mention the ease of use and UX that Apple demands of apps on it's AppStore.
- Consent and privacy: Having this baked in from the start goes a long way in allaying fears about privacy and data use. It is interesting to note that one of the reasons behind the [initial partnership](http://www.macrumors.com/2015/03/20/inside-story-researchkit/) to develop ResearchKit was that *"he wanted to work with them rather than competitors like Google and Microsoft because Apple is a hardware company that doesn't need to sell data, and that he believed Apple when the company said it wouldn't look at the data being used in ResearchKit"*. I'm a bit of skeptic so I don't fully believe that but time will tell.
- Passive data gathering: As mentioned earlier, the combination of HealthKit, Core Motion and ResearchKit opens up a world of possibilities.
- Active data gathering: easy forms!!!! And associated workflows. While this might seem trivial technically, making it easy from a business and developer perspective as described [here](https://developer.apple.com/researchkit/researchkit-technical-overview.pdf) is very promising.
- Open source: While the principles of this are not quite clear, it seems as though innovations around data capture can be (should / will be?) open sourced is again something that could force an opportunity for researchers and developers to collaborate with each other.
- Significant academic institution participation: The starting line up includes Massachusetts General Hospital, Dana Farber Cancer Institute, Penn Medicine, University of Oxford, University of Rochester, Stanford Medicine, UCLA Jonsson Cancer Research Center and Weill Cornell Medical College. That is an impressive line up.

### The gaps to be addressed

> "Hmmm, upgrades"
> — Neo, The Matrix Reloaded

But—and yes, there's always a but—apart from the business challenges outlined above, Apple does make it very clear that there are gaps, some of which will be addressed by Apple, others by developers via open source contributions and still others that will be left up to the researchers. Namely:

- Matching: Signups and participation is always a good thing. But as described earlier, verification and matching participants to match research study requirements is an open challenge.
- Passive background data collection: This must be enabled via APIs like HealthKit and CoreMotion that already support this.
- Security: Secure communication mechanisms between the app and server. This is not a significant issue. Hopefully all communication will be done over SSL/TLS.
- Scheduling: The ability to schedule surveys and active tasks for your participants. This is not automatic but again is addressable with server side logic.
- A defined data format for how ResearchKit structured data is serialized. Standardization around the data models will be a good thing to progress towards especially aligning with the HL7 and upcoming FHIR standards. This is an exciting area and something that we at Catalyze are working towards.
- Automatic compliance with international research regulations and HIPAA guidelines. These are the researcher's responsibility. Not to mention CFR21 Part 11 compliance. These are all the aspects that Catalyze deals with on an ongoing basis across a wide variety of customers.

### Summary

> "I think all you need is a small taste of success, and you will find it suits you."
> — Monique, Better Off Dead.

Apple's announcement around ResearchKit has generated a lot of [buzz and excitement](http://fortune.com/2015/03/15/apples-researchkit-is-a-big-hit-at-sxsw/) for good reason. The combination of HealthKit, Core Motion and ResearchKit is a potent combination. Hopefully, since two of three already exist in the Android world, the third should follow quickly. Which, from a patient and researcher perspective, is a good thing. While there are significant positives, there still remain several challenges that need to be resolved but it is our firm belief at Catalyze that existing solutions from vendors (such as Catalyze) and other open source contributions will see these addressed shortly.

