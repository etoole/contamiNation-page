---
layout: page
title: contamiNation

 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
   integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
   crossorigin=""/>

 <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
   integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
   crossorigin=""></script>
   #mapid { height: 180px; }
   
---
 <div id="mapid">
 <script>
var mymap = L.map('mapid').setView([39.82, 98.58], 4); L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoiZXRvb2xlIiwiYSI6ImNqOXhnZDZyejd1YnEyd2xnaXAzbTh3emYifQ.T7wJfqXiDlt8oky37rLdrQ} , attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>', 
  maxZoom: 12,
  id: 'mapbox.streets-satellite',
  accessToken: 'pk.eyJ1IjoiZXRvb2xlIiwiYSI6ImNqOXhnZDZyejd1YnEyd2xnaXAzbTh3emYifQ.T7wJfqXiDlt8oky37rLdrQ'
  }).addTo(mymap);
 </script>
</div>
