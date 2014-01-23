cacheview
======

A simple node.js web server application for viewing local tile caches in Leaflet. This application was developed to assist in visual QA for tile cache production jobs.

The application makes use of a configuration file that contains the following parameters

folder - the local path to root of the tile cache
template - a tokenized template to be used by Leaflet to call tiles. Note: folder + template should form a complete path to a tile.
initX, initY - longitude and latitude, respectively of the center coordinate of the map
initZoom - zoom level (0 - 19) of the map at startup
maxZoom - highest zoom level number to which the map can zoom

The "folder" parameter is used by node.js to direct calls to the proper location on the local filesystem. All other parameters are used by Leaflet for map construction.

This application makes use of the mime module determine content type. Without it, the html will not render properly. I was having path resolution issues on my Windows machine so I included mime here. Mime can be retrieved via npm but the current version of static.js looks for it in the same folder. This will be addressed in future updates. 

usage:

1. From command line: node static.js (the viewer will automatically load in the default browser)

<a title="hit counter"
href="http://statcounter.com/free-hit-counter/"
target="_blank"><img class="statcounter"
src="http://c.statcounter.com/9561107/0/0cb8abe1/1/"
alt="hit counter"></a>