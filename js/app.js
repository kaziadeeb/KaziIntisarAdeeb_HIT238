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