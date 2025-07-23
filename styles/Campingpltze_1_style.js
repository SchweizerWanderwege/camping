var style_Campingpltze_1 = function(feature, resolution){
    var value = feature.get("SYMBOL");
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';

    switch(valueStr) {
        case '1.018':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [5, 5],
                    scale: 6.0,
                    anchor: [2.5, 2.5],
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/campground-solid_green.png"
                })
            })];
        case '1.021':
            return [ new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [5, 5],
                    scale: 6.0,
                    anchor: [2.5, 2.5],
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "styles/campground-solid_orange.png"
                })
            })];
        default:
            // Fallback: still show a visible marker if SYMBOL is missing/unexpected
            return [ new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 10,
                    fill: new ol.style.Fill({color: 'red'}),
                    stroke: new ol.style.Stroke({color: 'black', width: 2})
                })
            })];
    }
};
