module.exports = (lon1, lat1, lon2, lat2 ) => {
    // mean radius of earth's = 6,371km
    const R = 6371;
    // distance between latitude and longitude  in radians
    const dLat = ((lat2 - lat1) * Math.PI) /180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    // haversine' formula to calculate diatance 
    const a 
}