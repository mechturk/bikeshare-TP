var options = {
  componentRestrictions: {country: 'au'}
};

var inputA, inputB;
var markerA, markerB;

function initAutocomplete(){
  inputA = document.getElementById('inputA');
  inputB = document.getElementById('inputB');
  autocompleteA = new google.maps.places.Autocomplete(inputA, options);
  autocompleteB = new google.maps.places.Autocomplete(inputB, options);

  google.maps.event.addListener(autocompleteA, 'place_changed', function() {
    var place = autocompleteA.getPlace();
    if (markerA != null) {
      markerA.setMap(null);
    }
    markerA = new google.maps.Marker({
      map: map,
      icon: "png/blue_MarkerA.png",
      title: place.name,
      position: place.geometry.location
    });
  });

  google.maps.event.addListener(autocompleteB, 'place_changed', function() {
    var place = autocompleteB.getPlace();
    if (markerB != null) {
      markerB.setMap(null);
    }
    markerB = new google.maps.Marker({
      map: map,
      icon: "png/blue_MarkerB.png",
      title: place.name,
      position: place.geometry.location
    });
  });


}


