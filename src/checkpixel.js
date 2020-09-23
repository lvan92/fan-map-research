function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}
function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
var earthRadiusKm = 6371;
var dLat = degreesToRadians(lat2-lat1);
var dLon = degreesToRadians(lon2-lon1);
lat1 = degreesToRadians(lat1);
lat2 = degreesToRadians(lat2);
var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
return earthRadiusKm * c;
}

export default function rangeDots(mapData, dot) {
    const range = []; 
    mapData.map(e => {
        range.push(distanceInKmBetweenEarthCoordinates(e.latitude, e.longitude, dot.latitude, dot.longitude));
    });
    return range;
}