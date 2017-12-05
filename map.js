<!doctype html>
<html>
<head>
  <script src='https://api.tiles.mapbox.com/mapbox.js/v1.6.3/mapbox.js'></script>
  <link href='https://api.tiles.mapbox.com/mapbox.js/v1.6.3/mapbox.css' rel='stylesheet' />
  <style>
    body {
      padding: 0;
      margin: 0;
    }

    html, body, #map {
      height: 100%;
    }

  </style>
  <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
  <script src='//api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/leaflet.markercluster.js'></script>
  <link href='//api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.css' rel='stylesheet' />
  <link href='//api.tiles.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v0.4.0/MarkerCluster.Default.css' rel='stylesheet' />
<body>
  <div id="map"></div>
  <script>
  
  L.mapbox.accessToken = 'pk.eyJ1IjoiZXRvb2xlIiwiYSI6ImNqOXhneGhiMDgxd3MzMnM0MWtqZ3BpMzEifQ.g1OtFeVOLGfArIgHc_ymqg'
  
  // ADD YOUR BASE TILES
  	var baseLayer = L.mapbox.map('map', 'mapbox.streets-satellite')
  	.setView([39.8283, -98.5795], 3);

  // DEFINE THE CLUSTER LAYER
  var markers = L.markerClusterGroup();

  // CALL THE GEOJSON HERE
  $.getJSON("test_markers.json", function(data) {
    var geojson = L.geoJson(data, {
      onEachFeature: function (feature, layer) {
        // USE A CUSTOM MARKER
        layer.setIcon(L.mapbox.marker.icon({'marker-symbol': 'circle-stroked', 'marker-color': '59245f'}));

        // ADD A POPUP WITH A CHART
        layer.bindPopup("<h1>" + feature.properties.name + "</h1>");

      }
    });
    markers.addLayer(geojson);

    // CONSTRUCT THE MAP
    var map = L.map('map', {maxZoom: 9}).fitBounds(markers.getBounds());
    baseLayer.addTo(map);
    markers.addTo(map);
  });
  </script>
</body>
</html>
