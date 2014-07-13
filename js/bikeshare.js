var bikeShareData;
var bikeShareDataURL = "http://data.melbourne.vic.gov.au/resource/kgfy-ymmq.json";

var lastInfoWindow = new google.maps.InfoWindow();

var request = new XMLHttpRequest;

function getBikeShareData(){
  request.onreadystatechange = processRequest;
  request.open("GET", bikeShareDataURL);
  request.send();
}

function processRequest(){
  if (request.status == 200 && request.response != ""){
    var rawData = request.response;
    bikeShareData = JSON.parse(rawData);
    bikeShareData.forEach(drawMarker);
  };
}

function drawMarker(station){
  var marker = new google.maps.Marker({
    position: {
      lat: Number(station.latitude),
      lng: Number(station.longitude)
    },
    title: station.maplabel,
    map: map
  });
  var infowindow = new google.maps.InfoWindow({
    content: createInfoWindowString(station)
  });
  google.maps.event.addListener(marker, 'click', function() {
    lastInfoWindow.close();
    infowindow.open(map, marker);
    lastInfoWindow = infowindow;
  });
}

function createInfoWindowString(station){
  var contentString = '<div class="infoBox">'+
    '<div class="stationName">' + station.name + '</div>' +
    '<div class="availbility">' + station.nbbikes + ' bikes/' + station.nbemptydoc + ' docks available</div>'
    '</div>';
  return contentString
}

getBikeShareData();
