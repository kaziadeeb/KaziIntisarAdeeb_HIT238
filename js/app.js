var mapElement = document.getElementById("mdisplay");
var latitude=parseFloat(mapElement.dataset.lat);
var longitude=parseFloat(mapElement.dataset.long);
var mapDisplay = "mdisplay";
var map;

function createMap(){
    map = new L.Map(mapDisplay, {
        center: new L.LatLng(latitude, longitude),
        zoom: 14,
        layers: new L.TileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")
    });

    var marker = new L.Marker(new L.LatLng(latitude, longitude));
    marker.bindPopup(mapElement.dataset.site);
    map.addLayer(marker);
}

createMap();

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}
