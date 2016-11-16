---
Title: Start Mirth Connect as a Service on Boot
SeoTitle: Start Mirth Connect as a Service on Boot
Author: mark
Fullname: Mark Olschesky
Date: 01/20/2015
Summary: 
Body: |
---
You want total uptime with your Mirth Connect servers. They should be resilient to the problems that usually beleaguer the cloud. This includes arbitrary reboots. Arbitrary reboots are the currency of the cloud and you should be prepared for them.

Did you know you can start/restart Mirth Connect as a Linux service? I wouldn't be surprised if you didn't. I'm a big fan of RTFM, but you aren't really told in [the manual](http://info.mirth.com/rs/mirthnextgen/images/MConn_v3_0_1_UserGuide.pdf?mkt_tok=3RkMMJWWfF9wsRonuqzPZKXonjHpfsXw7OgvXrHr08Yy0EZ5VunJEUWy2YMHS9Q%2FcOedCQkZHblFnVgPS62nVakNqKEO) or find it [easily in a google search](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&es_th=1&ie=UTF-8#q=mirth%20connect%20linux%20service) (most of these solutions are outdated or wrong).

Mirth talks a lot about starting and stopping the service using the GUI, but you really want your servers to try to stand themselves up in the event of an unforeseen outage. This is pretty easy to setup.

First, if you were unaware, you can use mcservice (in Mirth 3.* anyways) like any regular Linux service with:

`service mcservice start|stop|status|restart|force-reload`

Your options are pretty self-explanatory. If you want to set mcservice to automatically start on start/reboot, you simply need to input:

`sudo update-rc.d mcservice defaults`

This will restart mirth on boot, which on a VM running SSDs usually occurs within seconds. If you have a setup like [Catalyze](https://catalyze.io/hl7) where you have load-balanced, redundant servers ready to receive and process messages to incur a zero downtime outage. Otherwise, this should have you up and running again quickly and painlessly.

Tags: Mirth