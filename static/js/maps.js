let map;
const myLatLng = { lat: 33.861397, lng: -118.093444 };
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 16,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;