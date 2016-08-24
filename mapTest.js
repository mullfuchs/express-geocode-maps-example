var geocoder = require('geocoder');

geocoder.geocode('Space Needle', function(err, data) {
  console.log(data.results[0].geometry.location);
});