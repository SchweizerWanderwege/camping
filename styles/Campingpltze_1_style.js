var style_Campingpltze_1 = function(feature, resolution){
    var value = feature.get("SYMBOL");
    var valueStr = value !== undefined && value !== null ? value.toString() : "";

    switch(valueStr) {
        case "1.018":
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    src: "styles/campground-solid_green.png", // or .svg
                    scale: 0.01
                })
            }) ];
        case "1.021":
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    src: "styles/campground-solid_orange.png", // or .svg
                    scale: 0.01
                })
            }) ];
        default:
            return [ new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 8,
                    fill: new ol.style.Fill({color: 'red'}),
                    stroke: new ol.style.Stroke({color: 'black', width: 2})
                })
            }) ];
    }
};
