var map

function init_maps() {
  var mapOptions = {
    center: {"lng" : 144.967814, "lat" : -37.817523}, //Fed Square
    zoom: 15
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),
  mapOptions);
}

google.maps.event.addDomListener(window, 'load', init_maps);


