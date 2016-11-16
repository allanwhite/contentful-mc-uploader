---
Title: Top 5 Things You Find In An Ideal Business Associate Agreement
SeoTitle: Top 5 Things You Find In An Ideal Business Associate Agreement
Author: mohan
Fullname: Mohan Balachandran
Date: 12/18/2014
Summary: 
Body: |
>   I wish I could, I wish I might, have the wish I wish tonight
>   — _I wish I knew_

Previously we talked about [the importance of business associate agreements](/blog/the-importance-of-business-associate-agreements). But is there an ideal version everyone should pursue?

Generically, there isn't necessarily an ideal business associate agreement (BAA) because the contract depends heavily on the services procured. It's difficult to peg the perfect blanket BAA that is ideal for every company and every scenario.

We can, however, point to the ideal hosting business associate agreement. After three audits and numerous interactions with enterprise healthcare institutions, middle-sized companies, and startups, [we've published](https://policy.catalyze.io/#catalyze-hipaa-business-associate-agreement-baa) what we believe is the best approach to a hosting BAA.

Verbosity is always present in legalese, so we condensed the the keys to a good BAA down into 5 points. If possible, look for them in your future BAAs. Not having these in place will expose you to significant risk, incur additional costs, increase your time to market, or hamper your enterprise sales process.

### 1. Responsibility for encryption (at rest or in transit)
A core HIPAA mandate. Data at rest and in-transit *must* be encrypted. Ideally, your hosting provider should take care of this for you so that you are free to just focus on your application. This is [not often the case](http://bit.ly/1sHXvCb). Pay special attention to any in-transit caveats in the BAA. At Catalyze, we take care of all this for you.

### 2. Breach notification timelines
Enterprise healthcare is a general way to describe covered entities such as health systems, hospitals, health plans and insurance. You will discover their breach notification timelines are strict ranging from 24 hours to 7 days, which is constantly decreasing as breach penalties become more significant. Ensure that timelines across your vendors align. At Catalyze, our breach notification is 4 hours after discovery of said breach. It's not uncommon for other hosting providers to range from 30-60 days.

### 3. Logging (audit and more)
Logging is [expensive](http://devopsreactions.tumblr.com/post/98877420250/receiving-your-first-splunk-bill), but a key requirement to ensure appropriate tracking of access and ongoing activity. With Catalyze, you get your own dedicated logging instance built from an ELK (Elastic Search, Logstash and Kibana) stack. You are free to utilize that instance for other purposes as well (such as app and db specific logging etc.). Every one of our current customers who have migrated over to us from other IaaS / hosting providers have been pleasantly surprised that we include this in our service. 

### 4. Backup and Disaster Recovery
Backups are critical to avoiding PHI data loss. Most BAAs will outline it as your responsibility. We backup data on a regular schedule, so we take on the backup burden for you. Disaster Recovery (DR) is also important, but the exact requirement is slightly ambiguous. HIPAA just requires you to be able to re-instantiate your environment within whatever timeline your BAA sets. The advantage of the 12-factor approach we follow (similar to Heroku) is that it allows quick recovery of your environment and since the data is backed up on a regular basis, with Catalyze, you will be able to prove DR capabilities out of the box.

### 5. Covered Services
This is primarily targeted at IaaS (infrastructure as a service) providers. AWS especially, provides a huge variety of services. Please pay attention to the services that fall under the BAA and the caveats that come with their use. Can the load balancer be used directly or are there caveats around SSL termination? Can you use the DBaaS solution? Are the VMs provided ephemeral in nature or is data persisted? And so on. Again, feel free to [ping us](mailto:hello@catalyze.io) with questions.

### Summary: TL;DR
Please pay attention to the BAA. It is used as a mechanism to transfer responsibility and associated risk and liability. Look for specific caveats around covered services and encryption responsibilities. Logging especially can significantly increase costs. There is a difference between "HIPAA ready" and "HIPAA compliant". Look for more detail on this topic shortly from us. Catalyze provides an out-of-the-box solution to make your infrastructure HIPAA compliant.

Tags: business associates