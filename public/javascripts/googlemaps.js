function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -25.363882, lng: 131.044922 }
  });

  var marker = new google.maps.Marker({
    position: {lat: -25.363882, lng: 131.044922 }, 
    map: map
  });

  map.addListener('click', function(e) {
    placeMarkerAndPanTo(e.latLng, map, marker);
  });
}

function placeMarkerAndPanTo(latLng, map, marker) {
  marker.setPosition(latLng);
  map.panTo(latLng);

  $("#maplat").val(marker.getPosition().lat());
  $("#maplng").val(marker.getPosition().lng());
}

$(function() {
  $(".coursemap").each(function() {
    var lat = parseInt($(".courselat").text());
    var lng = parseInt($(".courselng").text());

    var map = new google.maps.Map(this, {
      zoom: 10,
      center: {lat: lat, lng: lng }
    });

    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng }, 
      map: map
    });
  });
});