---
Title: Happy Holidays from Catalyze
SeoTitle: Happy Holidays from Catalyze
Author: catalyze
Fullname: Anthony Pleshek
Tags: company
Date: 12/23/2014
---

<script src="/assets/js/processing.js" type="text/javascript"></script>
<div>
  <style>
    #catalyzeholidaycard {
      width:100%;
      max-width:400px;
    }
  </style>
  <canvas id="catalyzeholidaycard" data-processing-sources="/assets/js/catalyze_holiday_card.pde"
      width="400" height="400">
    <p>Your browser does not support the canvas tag.</p>
    <!-- Note: you can put any alternative content here. -->
  </canvas>
  <noscript>
    <p>JavaScript is required to view the contents of this page.</p>
  </noscript>
  <p>NOTE: You can click to generate a new configuration.</p>
</div>

### How It Works

Developed using [processing.js](http://processingjs.org/), our holiday card automatically generates snowflakes in the shape of the Catalyze logo. The basics of the sketch are handled by the following code, which just draws a line a certain distance from a central point, rotates 60 degrees, draws another line of the same distance, and repeats for a full 360 degrees.
```
void drawHexagonally(PVector startLoc, var distanceFromCenter) {
  for(int i=0; i<6; i++) {
    pushStyle();
    translate(startLoc.x, startLoc.y);
    rotate(radians(60*i));
    line(0, 0, distanceFromCenter, 0);
    popStyle();
  }
}
```

The rest of the code sets up the layout, determines when to add new branches, making sure that branches are added symmetrically, and handling when to draw the branches, which ended up being about ten times as much code as the basic concept.

Implementing the sketch was fairly straightforward, and a lot more time was spent tweaking the numbers. In the end we wanted a design that still had some complexity but one that wasn't too dense. The numbers that control what sorts of snowflakes include:
* step length - how far the sketch should draw a branch before checking to see if a new branch should be created
* stroke weight and transparency - the thickness and transparency of the lines that are drawn for each branch
* probability of generating new branches - the chance of generating another branch at each step
* maximum depth - how many layers of branches on branches that was allowed

All that said, we hope that you all have safe and happy holiday festivities!

P.S. Here's the full version of the code that is generating the snowflakes.

<style type="text/css">
  .gist-file
  .gist-data {max-height: 400px;}
  .line-data {background: #142836;}
</style>

(gist: https://gist.github.com/anthonypleshek/22b4b49ed5175a1c2d41)
