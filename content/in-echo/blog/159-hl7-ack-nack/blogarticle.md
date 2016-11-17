---
Title: HL7 ACK/NACK
SeoTitle: HL7 ACK/NACK
Author: mark
Fullname: Mark Olschesky
Date: 10/07/2015
Summary: 
Lead: |
In a two-way communication system that is properly using the HL7 standards, a receiving system will send an HL7 ACK (acknowledgement) message to the sending system to notify that the message was effectively received. In an archetypal HL7 environment, the sending system will presume the message was not received up until the delivery of an ACK message is made from the receiving system. By way of explanation, if the receiver does not return the ACK message, the sender may safely assume there is an error and halt message transmissions. 

Body: |
### ACK Message Anatomy

Here is an example of an HL7 ACK message:

```
MSH|^~\&|APPLICATION|HOSPITAL|Catalyze|INC|201513112402||ACK|MSGID5183033|P|2.4|
MSA|AA|MSGID5183033
```

It is clear that this message consists of two segments: message header (MSH) and message acknowledgement (MSA). MSH segments indicate what application or facility generated the message, unique ID for send message, and indicates what version of HL7 the message complies with. MSA segments determine what message is being acknowledged and if it was successfully processed and received. Inside an MSA segment are two types of relevant information: acknowledgement code, indicating if the message was successfully processed and received, and message control ID, denoting the unique ID of the acknowledged message. 

### Requirements of an ACK message

- Message is in HL7 format.
- The value ‘AA’ is in MSA-1 (MSA segment, field number 1). ‘AA’ means that the receiving system successfully received the message.
- The Message Control ID of the last message is in MSA-2 (MSA segment, field number 2). The original Message Control ID is found in MSH-10 (message segment, field number 10).

### Values of MSA-1

- AA - Application Accept (used for ACK)
- AE - Application Error (used for NACK)
- AR - Application Reject (used for NACK)

Moreover, if the message was not successfully received, an HL7 NACK (negative acknowledgement) message is sent back to the sending system. A NACK informs the sending system that there was error in message processing.

### Requirements of a NACK message

- Message is in HL7 format.
- The value ‘AE’ or ‘AR’ is in MSA-1 (MSA segment, field number 1). AE is Application Error. AR is Application Reject.
- The Message Control ID of the last message is in MSA-2 (MSA segment, field number 2). The original Message Control ID is found in MSH-10 (message segment, field number 10).

In short, standard HL7 protocol calls for ACKnowledgment protocol. Each time a system receives a message and processes the data, it is expected to send an ACKnowledgment message back to the sending system. The sending system is expected to keep on sending a message until it has received a ACK/NACK message. Without this standard enacted, data could be lost in transmission.

Questions? Thoughts? Anything related to HL7 integration on your mind? [Tweet us](https://twitter.com/catalyzeio) or shoot us an [email](hello@catalyze.io). If you want to read more about HL7, check out some of our [HL7](https://catalyze.io/learn/hl7-101-a-primer) resources freely available in our [Academy](https://catalyze.io/learn).

Tags: hl7 integration