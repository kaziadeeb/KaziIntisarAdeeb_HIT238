var blueMountainLat=-33.6176;
var blueMountainLong=150.4559;
var mapDisplay = "mdisplay";
var map;

function createMap(){
    map = new L.Map(mapDisplay, {
        center: new L.LatLng(blueMountainLat, blueMountainLong),      
        zoom: 14,      
        layers: new L.TileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")  
    }); 

    var marker = new L.Marker(new L.LatLng(blueMountainLat, blueMountainLong));
    marker.bindPopup("Blue Mountains");
    map.addLayer(marker);
}

createMap();