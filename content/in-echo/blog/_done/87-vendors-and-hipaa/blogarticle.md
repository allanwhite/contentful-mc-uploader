---
Title: "If a vendor won't sign a BAA, they aren't \"HIPAA-compliant\""
SeoTitle: "If a vendor won't sign a BAA, they aren't \"HIPAA-compliant\""
Author: mark
Fullname: Mark Olschesky
Date: 01/07/2015
Summary: HIPAA compliance isn't a sticker that you put on servers that wards off hackers and HHS. It's a dedication to doing the right thing for users and their PHI every day.
Lead: |
  We have [Business Associate Agreements (BAAs)](/learn/business-associate-agreements) with all vendors that are partners to deliver our services which we pass through to our customers through our BAAs. It certainly simplifies things for our customers.

Tags: compliance, legalities, business associates
Category: company
---
I was talking with a customer the other day about integrating with a service they used for real-time data processing. I first looked to see if this vendor would sign a BAA. I received this from their support staff:

- The vendor in question doesn't necessarily need to be HIPAA-compliant because they aren't storing data.
- But, even if they did, they encrypted the data in transit and in storage.
- Ergo, they are HIPAA-compliant.

Parts of this are true, and it's good the vendor is encrypting data passing through their systems. However, a lot is left out.

- There is so much more to HIPAA than encrypting data. You can read about everything we do to be HIPAA-compliant in our [policies](http://catalyzeio.github.io/policies/). At a minimum, a vendor must encrypt data and ensure [physical media meets HIPAA's physical security requirements](https://hipaa.catalyze.io/#physical-safeguards-see-a-hrefhttpwww-hhs-govocrprivacyhipaaadministrativesecurityrulephyssafeguards-pdf164-310a). As a result, that vendor would need to have a BAA signed with their hosting vendor to ensure legitimacy.
- Even though the vendor claimed they were not storing PHI, having data pass through their systems would still require protection under HIPAA. Also, I would never take a vendor's word on this. You definitely want that promise in writing, in a BAA.
- If you are going to work with a vendor who [transmits or stores PHI](/learn/what-is-protected-health-information-or-phi), they've got to sign a BAA with you. Doesn't matter if they encrypt their data. Doesn't matter if they have printed policies that map to HIPAA rules. Doesn't matter if they are a big company that works with enterprises. Doesn't matter if they buy you dinner. Doesn't matter if they'll write a GUI in Visual Basic to scan for Angelina Jolie and Matthew Broderick. You will be on the hook in the event of an audit or breach and you will lack any avenue to seek legal recourse. That's the worst case scenario. HIPAA's rules and policies are exactly for that event.

I'm always wary of companies that claim to be HIPAA-compliant that don't have clear BAAs or policies. HIPAA compliance isn't a sticker that you put on servers that wards off hackers and HHS. It's a dedication to doing the right thing for users and their PHI every day. There's no HIPAA police or mandated marketing policies, so there's nothing to stop companies from claiming HIPAA compliance by providing you zero or minimal reasonable safeguards of PHI. The bad news is that the moment you'd find out that you weren't covered under HIPAA, barring it didn't prevent a sale, would be at the worst possible moment of a breach or an audit. We can help you avoid this, and in addition to a BAA, you'll get superb service and ops support too.

