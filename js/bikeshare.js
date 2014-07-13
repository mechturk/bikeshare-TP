var bikeShareData;
var bikeShareDataURL = "http://data.melbourne.vic.gov.au/resource/kgfy-ymmq.json";

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
}

getBikeShareData();
