var map

function initMaps() {
  var mapOptions = {
    center: {"lng" : 144.967814, "lat" : -37.817523}, //Fed Square
    zoom: 15
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),
  mapOptions);
  drawCyclingLayer();
}

function init() {
  initMaps();
  initAutocomplete();
}

function drawCyclingLayer() {
  var cyclingLayer = new google.maps.BicyclingLayer();
  cyclingLayer.setMap(map);
}

google.maps.event.addDomListener(window, 'load', init);


