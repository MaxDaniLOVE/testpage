const map = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibWF4ZGFuaWxvdiIsImEiOiJjazNkYTY2ZnEwdDZxM2NwOGJwN3hiMWZ6In0.EfNj3CDIoHMbo-pt3C_4oA";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    zoom: 12,
    center: [27.5557, 53.9083]
  });
  map.on("load", function () {
    map.loadImage("https://i.imgur.com/MK4NUzI.png", function (error, image) {
      if (error) throw error;
      map.addImage("custom-marker", image);
      map.addLayer({
        id: "markers",
        type: "symbol",
        source: {
          type: "geojson",
          data: {
            type: 'FeatureCollection',
            features: [{
              type: 'Feature',
              properties: {},
              geometry: {
                type: "Point",
                coordinates: [27.5561, 53.9081]
              }
            }]
          }
        },
        layout: {
          "icon-image": "custom-marker",
        }
      });
    });
  });
}

export default map;