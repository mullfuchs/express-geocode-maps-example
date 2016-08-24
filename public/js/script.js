var initMap = function(argument) {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 10
  });

  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      var initialLocation = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );

      map.setCenter(initialLocation);
    });
  }

  markers.forEach(function(marker) {
    var position = new google.maps.LatLng(marker.lat, marker.lng);
    var googleMarker = new google.maps.Marker({
      position: position,
      title: marker.name,
      map: map
    });

    googleMarker.addListener('click', function(){
      var infoWindow = new google.maps.InfoWindow({
        content: '<h3>'+ marker.name + '</h3>'
      });

      infoWindow.open(map, googleMarker);
    });
  });
  // body...
}