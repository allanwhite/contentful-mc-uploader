---
Title: "What's new in the Catalyze Mobile Backend as a Service"
SeoTitle: "What's new in the Catalyze Mobile Backend as a Service"
Author: ben
Fullname: Ben Uphoff, PhD
Date: 03/16/2015
Summary: 
Lead: |
  We've been busy behind the scenes continuing to build out the Catalyze [Mobile Backend as a Service](https://catalyze.io/baas) (BaaS). Catalyze BaaS is geared towards developers who want to build a HIPAA-compliant mobile application without the need of managing servers or dealing with database backend administration tasks. We provide a REST API focused on storing [Protected Health Information](https://catalyze.io/learn/what-is-protected-health-information-or-phi) along with giving you all the data and user management tools you need to build your app. 

Tags: BaaS, mobile, product
Category: company
---
Since Fall our primary focus areas have been speed, stability and architectural improvements. We are very happy with where BaaS is headed and look forward to new releases in future months which will introduce new features like auto-indexing of custom classes to improve query performance for critical tasks, more insight into application usage, and tighter integration with our [Platform as a Service](https://catalyze.io/paas). 

### Architecture Improvements

Speed is critical in the mobile world. To make general operations faster on the API, we have consolidated some microservices together and now have a single primary REST endpoint to reduce round trips within our network. This endpoint is scaled out to multiple servers and load balanced to further improve response time. The biggest indicator of improvement was that our lengthy regression test suite took only 30% as long to run. Application performance should improve by a factor of two, depending on workload. 

Over the last six months we have also been moving away from a split backend of MySQL and Riak to one that is based entirely on PostgreSQL. We have been extremely happy with the performance and feature set that PostgreSQL 9.3 provides, especially features like [JSON data support](http://www.postgresql.org/docs/9.3/static/datatype-json.html) and [full text search](http://www.postgresql.org/docs/9.3/static/textsearch-intro.html). We initially used PostgreSQL to replace Riak (although we remain huge Riak fans) and as of 12/29/2014 we have been running 100% on PostgreSQL. Since that deploy we have been evaluating PostgreSQL 9.4 in our test and QA environments are are seeing impressive speedups, especially for custom class queries.  

### Security 

Fortunately, we have been largely unaffected by any security vulnerabilities but we did take steps to patch all of our servers to address the widely publicized [GHOST vulnerability](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-0235) (CVE-2015-0235). BaaS continues to be a safe, secure and heavily audited place to store PHI.  

### Updated Docs, Removal of Clinical Data Routes

We removed some REST routes that were not being used by any applications to streamline and reduce the complexity of the API. The routes removed were related to very specific clinical data types like medications, vitals, providers, etc. The models behind the routes were nice in principle but often lagged behind the custom class implementation (e.g. query power, sorting, pagination). Also they did not provide developers with any flexibility in defining the models. In health care there is no one-size-fits-all data model!  

To address this gap for developers, we replaced the old clinical data model documentation with custom class templates for all of the removed data models. This allows developers to take full advantage of custom classes while benefiting from clinical data models built by Catalyze's team of experts in health care data modeling. Furthermore the templates can be extended, tweaked and modified to suit the needs of any app. 

Have a look at our newly redesigned [Resources page](https://resources.catalyze.io/) for more information on BaaS and access to guides and the API reference. 

### Give it a try

Catalyze BaaS is free to try for 30-days. If you are looking for an enterprise or self-hosted solution please contact us directly at [hello@catalyze.io](mailto:hello@catalyze.io).

