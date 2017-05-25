var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
}

function initMap() {
  var uluru = {lat: 2.3333, lng:35.8333};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
