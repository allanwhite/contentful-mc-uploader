---
Title: "The FHIR Resource Object: The Core Building Block"

Author: mohan

Date: 05/26/2015

Tags: FHIR

---
To understand FHIR, you must understand the Resource object. This entry will help explain its origins and intent, then provide links to expand your understanding.

First, a quote from the [FHIR website](http://www.hl7.org/fhir/):

> FHIR solutions are built from a set of modular components called "Resources". These resources can easily be assembled into working systems that solve real world clinical and administrative problems at a fraction of the price of existing alternatives. FHIR is suitable for use in a wide variety of contexts – mobile phone apps, cloud communications, EHR-based data sharing, server communication in large institutional healthcare providers, and much more.

At the core of FHIR's design is the concept of a Resource. Resources are essentially a structured model of a JSON or XML object. There are various resource categories, namely:

##### Clinical Resources
Models that describe clinical objects such as Medications, Diagnostics, Observations or other General objects.

##### Administrative Resources
Models that outline how clinical resources are attributed (Attribution), or are described (Entities), or are used to support workflows (Workflow).

##### Infrastructure Resources
Models that pertain to carrying specific data payloads such as documents, message headers specifying source and destinations, and more. Critically, there are four key model types described in this category:

* **Composition** — Allows combination of multiple resources into a single, complex and more descriptive object.
* **Query** — Defines a structure for requesting data elements via querying and an associated structure for returning responses.
* **Profiles** — Intended to be a self-descriptive way to define what models and extensions are supported by the specific implementation and the associated models. Also where model extensions can be specified to extend other models to support specific needs.
* **Value Sets** — Addresses one of the biggest challenges in healthcare. Different health systems use different value sets and the challenge with interoperability has exacerbated because of the differences. This model allows each implementation to specify the value sets in use to assure semantic interoperability.

Putting these various models together allows for the creation of most any clinical condition.

### Structure of any Resource

All resources follow a standard model with content and associated extensions being the only thing that changes from resource to resource, meaning while a Patient Resource and a Medication Resource both have the same general overall structure, the content within each describing the resource will be different and specific to that resource.

The general structure of any resource is as follows:

1. **Resource Type** — Identifies the specific resource model i.e. Patient, Medications, Allergies, etc.
2. **Human Readable summary section** — An XHTML section that provides a human readable version of the content within the message. Can be considered as a backup as well as a verification section.
3. **Identifier section** — A unique identifier URL for each resource identifying to be of a specific type e.g. Patient.
4. **Extension section** — Allows for the definition of any extensions that might be required to support specific clinical workflows e.g. clinical trial applicability. Can be inserted in any of sections to cover specific use cases and workflow needs.
5. **Contained Resources** — Other resources used in identification and transaction processing e.g. message header and the data object corresponding to the type identified earlier or images associated with the patient such as an avatar.
6. **Resource content** — The core content of the resource. In the case of a patient, it contains all relevant details about that patient such as name, address, phone, guardian or other contact info and so on. Each resource has a defined data model.
7. **Tags** — Typical tagging paradigm you're used to. For example, Security labels which can include ACLs, workflow specific functions, etc. This one is still murky, however, and should be considered under development.

Let's take a sample Resource Object and work our way through it. We'll lay out the individual sections and describe them, then finally put it all together in real syntax to see what the complete resource will look like.

We'll begin with an example Patient Resource.

#### Resource Type

Every resource will start with its name. Given the Patient example, it will start with:

```
"resourceType": "Patient"
```

This sets the context of the data exchange and allows for appropriate parsing and other rules to be invoked.

#### Human Readable Summary

Every resource has an associated tabular description of the contents of the message, thus making it human readable. The contents of this section are in XHTML format and will include all the `\n` (next line) characters. A sample human readable summary included in a patient message could look like this:

```
  "text": {
      "status": "generated",
      "div": "<div>
    <table> \n
      <tbody> \n
        <tr> \n
          <td>Name</td>  \n
          <td>John Samuel <b>Appleseed</b> ("John")</td>  \n
        </tr>  \n
        <tr>  \n
          <td>Address</td> \n
          <td>1231 Evergreen Ave, #30, San Francisco, CA 90002</td>  \n
        </tr>  \n
        <tr> \n
          <td>Contacts</td> \n
          <td>Home: unknown. Work: (203) 5555 6473, Name: Bénédicte du Marché. Relationship: Partner. Phone: +33 (237) 998327</td> \n
        </tr> \n
        <tr> \n
          <td>Gender</td> \n
          <td>Male</td> \n
        </tr> \n
        <tr> \n
          <td>Birthdate</td> \n
          <td>1974-12-25</td> \n
        </tr> \n
        <tr> \n
          <td>Marital Status</td> \n
          <td>Married</td> \n
        </tr> \n
        <tr> \n
          <td>Multiple Birth Count</td> \n
          <td>3</td> \n
        </tr>  \n
        <tr> \n
          <td>Id</td> \n
          <td>MRN: 12345 (Acme Healthcare)</td> \n
        </tr> \n
      </tbody> \n
    </table> \n
</div>"
    }
```

Which could be easily parsed and made readable. In this case, the parsed / rendered content would look like this:

<div>
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>John Samuel <b>Appleseed</b> ("John")</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>1231 Evergreen Ave, #30, San Francisco, CA 90002</td>
        </tr>
        <tr>
          <td>Contacts</td>
          <td>Home: unknown. Work: (203) 5555 6473, Name: Bénédicte du Marché. Relationship: Partner. Phone: +33 (237) 998327</td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Birthdate</td>
          <td>1974-12-25</td>
        </tr>
        <tr>
          <td>Marital Status</td>
          <td>Married</td>
        </tr>
        <tr>
          <td>Multiple Birth Count</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Id</td>
          <td>MRN: 12345 (Acme Healthcare)</td>
        </tr>
      </tbody>
    </table>
</div>

The intent of this section is borrowed from the HL7 spec. The human readable version of the FHIR content serves two purposes:

1. Testing from a developer perspective is simplified as the developer now knows exactly what the message / transaction is *supposed* to communicate.
2. Overcoming errors in processing so even if the message gets garbled in processing, the human readable version is always available as a fallback for clinicians and others performing care.

Note that this narrative element in a resource is **not** mandatory. If you have do put one in, it **shall** reflect all the content needed for a human to understand the essential clinical and business information otherwise encoded within the resource. Note also that this generally will be difficult to generate. Epic, for example, has chosen to [drop this section](http://open.epic.com/Clinical/FHIR?whereTo=patient) from their spec for the time being. We expect a similar trend across various EHRs so practical deployments can (for the time being) safely skip this.

### Identifier section

In FHIR, every object is expected to have its own URI (universal resource identifier). All this implies is that every patient, in our context, will have their own URI, and potentially URL, with a unique identifier. Identifiers could include SSN (social security numbers), MRNs (medical record numbers), and any number of others. Multiple identifiers can be specified since it is defined as an array. In our context, this would look like the following.

```
"identifier": [
    {
      "use": "usual",
      "label": "MRN",
      "system": "urn:oid:1.2.36.146.595.217.0.1",
      "value": "12345",
      "period": {
        "start": "2001-05-06"
      },
      "assigner": {
        "display": "Acme Healthcare"
      }
    }
  ]

```

### Extensions

This is healthcare after all. There are a million use cases that you can think of that requires "slightly" different definitions that what is already provided. Not to mention that since FHIR is supposed to be a **universal** standard, all of these must be taken into account as well. Hence the need for extensions.

Extensions can be tacked on to any Resource Object as long as they follow a specified format. The general format specified is as follows:

```
"name" : {
  "extension: [
    {
      "url" : "https://{{url.defining.extension-profile.com/id}}",
      "valueCode" : "{{value}}"
     }]
  "text": "{{human readable value - this is optional}}"/>
}
```

Let's take a couple of use cases.

#### Marital Status

```
"_maritalStatus": {"extension": [{
      "valueCode": "Common-law",
      "url": "http://fhir-endpoint.someorg.com/fhir/version1.0/marriage-extension#cl"
  }]}
```

#### Clinical Trials

Here's another extremely relevant example of a patient resource where you can see an extension specific to a clinical trial, including data elements such as trial status, profile with the trial status code, date, and the physician recording the results of the study.

```
  "resource-type" : "Patient",
  "extension" : [
    {
      "url" : "http://fhir-endpoint.someorg.com/fhir/version1.0/Profile/clinical-trails#trial-status",
      "extension" : [
        {
          "url" : "http://fhir-endpoint.someorg.com/fhir/version1.0/Profile/clinical-trails#trial-status#trial-status-code",
          "valueCode" : "Started"
        },
        {
          "url" : "http://fhir-endpoint.someorg.com/fhir/version1.0/Profile/clinical-trails#trial-status#trial-status-date",
          "valueDate" : "2015-02-26"
        },
        {
          "url" : "http://fhir-endpoint.someorg.com/fhir/version1.0/Profile/clinical-trails#trial-status#trial-status-who",
          "valueResource" : {
            "reference" : "Practitioner/f6dbc2f3-d054-4dd7-84c1-5e675f8e50d7"
          }
        }
     ]
   }
  ],
  ... other data for patient...
```

### Contained Resources

Since FHIR is a request-based format, contained resources are a way to minimize the number of calls to address use cases where specific data elements need to be served up every time a request is made to a particular resource. An example would be if a patient avatar picture needs to be served up anytime a patient resource is returned. Note that this assumed that the request is valid and the request is authenticated and authorized before the response is served.

In this specific scenario, if the patient avatar image always has to be sent along with any patient resource request, then it would look something like this:

```
  "contained": [
      {
          "resourceType": "Binary",
          "id": "pic1",
          "contentType": "image/gif",
          "content": "R0lGODlhEwARAPcAAAAAAAAA/+9aAO+1AP/WAP/eAP/eCP/eEP/eGP/nAP/nCP/nEP/nIf/nKf/nUv/nWv/vAP/vCP/vEP/vGP/vIf/vKf/vMf/vOf/vWv/vY//va//vjP/3c//3lP/3nP//tf//vf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEAAAEALAAAAAATABEAAAi+AAMIDDCgYMGBCBMSvMCQ4QCFCQcwDBGCA4cLDyEGECDxAoAQHjxwyKhQAMeGIUOSJJjRpIAGDS5wCDly4AALFlYOgHlBwwOSNydM0AmzwYGjBi8IHWoTgQYORg8QIGDAwAKhESI8HIDgwQaRDI1WXXAhK9MBBzZ8/XDxQoUFZC9IiCBh6wEHGz6IbNuwQoSpWxEgyLCXL8O/gAnylNlW6AUEBRIL7Og3KwQIiCXb9HsZQoIEUzUjNEiaNMKAAAA7"
      },
      {
          "resourceType": "Organization",
          "id": "org3141",
          "text": {
              "status": "generated",
              "div": "<div>\n      <p>Good Health Clinic<\/p>\n    <\/div>"
          },
          "identifier": [{
              "system": "urn:ietf:rfc:3986",
              "value": "2.16.840.1.113883.19.5"
          }],
          "name": "Good Health Clinic"
      }
  ]
```

### Resource Content

The meat of the FHIR message. Every resource has a model associated with it that is different based upon the resource type in question. As you can imagine, in the context of a patient, the kind of information that needs to be shared includes date of birth, contact information, next of kin, address info etc. The sample below is pretty self explanatory.

```
  "extension":
        {
            "url": "http://hl7.org/fhir/example-do-not-use#Patient.avatar",
            "valueResource": {
                "reference": "#pic1",
                "display": "Duck image"
            },
        },
  "name": [
    {
      "use": "official",
      "family": [
        "Chalmers"
      ],
      "given": [
        "Peter",
        "James"
      ]
    },
    {
      "use": "usual",
      "given": [
        "Jim"
      ]
    }
  ],
  "telecom": [
    {
      "use": "home"
    },
    {
      "system": "phone",
      "value": "(203) 5555 6473",
      "use": "work"
    }
  ],
  "gender": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/v3/AdministrativeGender",
        "code": "M",
        "display": "Male"
      }
    ]
  },
  "birthDate": "1974-12-25",
  "deceasedBoolean": false,
  "address": [
    {
      "use": "home",
      "line": [
        "Evergreen Ave, #30"
      ],
      "city": "San Francisco",
      "state": "CA",
      "zip": "90002"
    }
  ],
  "_maritalStatus": {"extension": [{
      "valueCode": "ASKU",
      "url": "http://hl7.org/fhir/Profileiso-21090#nullFlavor"
  }]},
  "multipleBirthInteger": 3,
  "contained": [
      {
          "resourceType": "Binary",
          "id": "pic1",
          "contentType": "image/gif",
          "content": "R0lGODlhEwARAPcAAAAAAAAA/+9aAO+1AP/WAP/eAP/eCP/eEP/eGP/nAP/nCP/nEP/nIf/nKf/nUv/nWv/vAP/vCP/vEP/vGP/vIf/vKf/vMf/vOf/vWv/vY//va//vjP/3c//3lP/3nP//tf//vf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEAAAEALAAAAAATABEAAAi+AAMIDDCgYMGBCBMSvMCQ4QCFCQcwDBGCA4cLDyEGECDxAoAQHjxwyKhQAMeGIUOSJJjRpIAGDS5wCDly4AALFlYOgHlBwwOSNydM0AmzwYGjBi8IHWoTgQYORg8QIGDAwAKhESI8HIDgwQaRDI1WXXAhK9MBBzZ8/XDxQoUFZC9IiCBh6wEHGz6IbNuwQoSpWxEgyLCXL8O/gAnylNlW6AUEBRIL7Og3KwQIiCXb9HsZQoIEUzUjNEiaNMKAAAA7"
      },
      {
          "resourceType": "Organization",
          "id": "org3141",
          "text": {
              "status": "generated",
              "div": "<div>\n      <p>Good Health Clinic<\/p>\n    <\/div>"
          },
          "identifier": [{
              "system": "urn:ietf:rfc:3986",
              "value": "2.16.840.1.113883.19.5"
          }],
          "name": "Good Health Clinic"
      }
  ],
  "contact": [
    {
      "relationship": [
        {
          "coding": [
            {
              "system": "http://hl7.org/fhir/patient-contact-relationship",
              "code": "partner"
            }
          ]
        }
      ],
      "name": {
        "family": [
          "du",
          "Marché"
        ],
        "_family": [
          {
            "extension": [
              {
                "url": "http://hl7.org/fhir/Profile/iso-21090#qualifier",
                "valueCode": "VV"
              }
            ]
          },
          null
        ],
        "given": [
          "Bénédicte"
        ]
      },
      "telecom": [
        {
          "system": "phone",
          "value": "+33 (237) 998327"
        }
      ]
    }
  ],
  "managingOrganization": {
    "reference": "Organization/1"
  },
  "active": true
```

There are other elements of a resource such as tags, metadata, etc., which aren't quite as well defined.

Piecing together our discussion thus far, here's what the final Patient Resource showing the above sections will look like in aggregate.

```
{
  "resourceType": "Patient",
  "text": {
    "status": "generated",
    "div": "<div>\n
    <table>\n <tbody>\n <tr>\n
    	<td>Name</td>\n <td>John Samuel <b>Appleseed</b> ("John")</td>\n
    </tr>\n <tr>\n <td>Address</td>\n
    <td>Evergreen Ave, #30, San Francisco, CA 90002 </td>\n </tr>\n <tr>\n
    <td>Contacts</td>\n <td>Home: unknown. Work: (203) 5555 6473</td>\n
</tr>\n <tr>\n <td>Id</td>\n
<td>MRN: 12345 (Acme Healthcare)</td>\n </tr>\n
</tbody>\n </table>\n </div>"
  },
  "identifier": [
    {
      "use": "usual",
      "label": "MRN",
      "system": "urn:oid:1.2.36.146.595.217.0.1",
      "value": "12345",
      "period": {
        "start": "2001-05-06"
      },
      "assigner": {
        "display": "Acme Healthcare"
      }
    }
  ],
  "extension": [
        {
            "url": "http://hl7.org/fhir/example-do-not-use#Patient.avatar",
            "valueResource": {
                "reference": "#pic1",
                "display": "Duck image"
            }
        },
  "name": [
    {
      "use": "official",
      "family": [
        "Chalmers"
      ],
      "given": [
        "Peter",
        "James"
      ]
    },
    {
      "use": "usual",
      "given": [
        "Jim"
      ]
    }
  ],
  "telecom": [
    {
      "use": "home"
    },
    {
      "system": "phone",
      "value": "(203) 5555 6473",
      "use": "work"
    }
  ],
  "gender": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/v3/AdministrativeGender",
        "code": "M",
        "display": "Male"
      }
    ]
  },
  "birthDate": "1974-12-25",
  "deceasedBoolean": false,
  "address": [
    {
      "use": "home",
      "line": [
        "Evergreen Ave, #30"
      ],
      "city": "San Francisco",
      "state": "CA",
      "zip": "90002"
    }
  ],
  "_maritalStatus": {"extension": [{
      "valueCode": "ASKU",
      "url": "http://hl7.org/fhir/Profileiso-21090#nullFlavor"
  }]},
  "multipleBirthInteger": 3,
  "contained": [
      {
          "resourceType": "Binary",
          "id": "pic1",
          "contentType": "image/gif",
          "content": "R0lGODlhEwARAPcAAAAAAAAA/+9aAO+1AP/WAP/eAP/eCP/eEP/eGP/nAP/nCP/nEP/nIf/nKf/nUv/nWv/vAP/vCP/vEP/vGP/vIf/vKf/vMf/vOf/vWv/vY//va//vjP/3c//3lP/3nP//tf//vf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEAAAEALAAAAAATABEAAAi+AAMIDDCgYMGBCBMSvMCQ4QCFCQcwDBGCA4cLDyEGECDxAoAQHjxwyKhQAMeGIUOSJJjRpIAGDS5wCDly4AALFlYOgHlBwwOSNydM0AmzwYGjBi8IHWoTgQYORg8QIGDAwAKhESI8HIDgwQaRDI1WXXAhK9MBBzZ8/XDxQoUFZC9IiCBh6wEHGz6IbNuwQoSpWxEgyLCXL8O/gAnylNlW6AUEBRIL7Og3KwQIiCXb9HsZQoIEUzUjNEiaNMKAAAA7"
      },
      {
          "resourceType": "Organization",
          "id": "org3141",
          "text": {
              "status": "generated",
              "div": "<div>\n      <p>Good Health Clinic<\/p>\n    <\/div>"
          },
          "identifier": [{
              "system": "urn:ietf:rfc:3986",
              "value": "2.16.840.1.113883.19.5"
          }],
          "name": "Good Health Clinic"
      }
  ],
  "contact": [
    {
      "relationship": [
        {
          "coding": [
            {
              "system": "http://hl7.org/fhir/patient-contact-relationship",
              "code": "partner"
            }
          ]
        }
      ],
      "name": {
        "family": [
          "du",
          "Marché"
        ],
        "_family": [
          {
            "extension": [
              {
                "url": "http://hl7.org/fhir/Profile/iso-21090#qualifier",
                "valueCode": "VV"
              }
            ]
          },
          null
        ],
        "given": [
          "Bénédicte"
        ]
      },
      "telecom": [
        {
          "system": "phone",
          "value": "+33 (237) 998327"
        }
      ]
    }
  ],
  "managingOrganization": {
    "reference": "Organization/1"
  },
  "active": true
}

```

### Summary

Some FHIR resources are still undefined and open to comment, such as Financial models, which will fall under the Administrative category of Resources. The above sections delve in a little bit more detail on the overall resource model and its constituent parts.

Every resource consists of the following:

* **Identifier section** — A unique identifier URL for each resource identifying the resource to be of a specific type e.g. patient. It is a required component.
* **Human Readable summary section** — An XHTML section that provides a human readable version of the content within the message. This can be considered as a backup as well as a verification section. It can be skipped unless you can ensure all data contained in the message is also represented here. It is an optional component.
* **Extension section** — Allows for the definition of any extensions that might be required to support specific clinical workflows e.g. clinical trial applicability. This can be inserted in any of the sections to cover specific use cases and workflow needs. This is required if resources include data elements / objects that are not part of the core FHIR models.
* **Contained Resources** — Other resources used in identification and transaction processing e.g. message header and the data object corresponding to the type identified earlier, such as images, that always need to be returned as part of the resource request. This is an optional element.
* **Metadata** — Such as version number of the resource. This is an optional element.
* **Resource content** — The core content of the resource. In the case of a patient, all relevant details about that patient such as name, address, phone, guardian or other contact info and so on. Each resource has a defined data model. This is a required element (otherwise why bother?).
* **Tags** — Such as security labels which can include ACLs, workflow specific functions, etc. This is optional. It is also under design.

While the FHIR spec is calcifying, no doubt additions and subtractions are on the horizon. Stay tuned for updates.
