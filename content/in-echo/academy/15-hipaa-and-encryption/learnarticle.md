---
Title: HIPAA and Encryption

Seotitle: HIPAA and Encryption

Date: 03/23/2016

---
Encryption is one of the standards that exist within the HIPAA Security Rule (164.312(a)(2)(iv)). Specifically encryption is used as a means of access control. HIPAA defines encryption as "the use of an algorithmic process to transform data into a form in which there is a low probability of assigning meaning without use of a confidential process or key". HIPAA goes to say “Implement a mechanism to encrypt and decrypt electronic protected health information".

When we talk about encryption in HIPAA, it means both encryption in transit, or data moving from point A (app) to point B (server/DB), as well as encryption at rest, or on the hard drive. Encryption is straightforward. It's become industry practice not just in healthcare, but generally - with web services and even increasingly websites - to use SSL and encryption during transmission. With HIPAA, it's important that you do end-to-end encryption - from app to firewall to app server to database server, or logging server even. That means every step along the way from origination to delivery.

The level of encryption that you use in transit is something that should be industry best practice. We use 256-bit SSL encryption in transit. We have talked to some large corporate entities that have systems that store massive amounts of ePHI behind firewalls in secure networks and the encryption that they're using is just 56-bit on some of these systems. If you talk to them, they feel that the risk is mitigated because of the environment and the access controls that are round those systems and networks.

The other aspect of encryption is encryption at rest. If you store data in some type of database, encrypting that hard disk is important. When we started out with Catalyze, we encrypted all of our hard drives. What we discovered was that we took a pretty big hit on I/O performance doing that with standard drives. We swapped out all of our drives for high performing SSD drives, and that improved our performance considerably. Today we encrypt all of our database drives using AES 256-bit encryption, and the SSD drives make the performance comparable to unencrypted volumes.

There are other encryption tools you can use to improve performance in an encrypted environment. The newer Intel i5 and i7 chips can do AES-NI, which speeds up encryption considerably. AES-NI is what the makes the performance in FileVault2 encryption on new Macs so much better than the performance in previous versions. As part of our HIPAA workstation security policy, we require FileVault encryption on all company laptops. We also encrypt internal company passwords, SSH keys, and secure notes using Lastpass and 256-bit encryption. Decrypting Lastpass requires two-factor authentication through Duo Security.

Encryption strategy is something you need to think about. This means more than just encrypting, it means how are you going to securely manage keys and maintain performance of your technology. We're happy to talk to you more about how we take care of all aspects of encryption, from in-transit to at-rest to key management to performance, for our customers.

Tags: HIPAA

Author: adam

Interlinking: <h2>Explore more topics on HIPAA. Visit our Content Archive on the Basics of HIPAA.</h2>
<a href="http://content.catalyze.io/hipaa-basics">Content Archive</a>