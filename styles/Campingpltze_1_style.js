var style_Campingpltze_1 = function(feature, resolution){
    return [ new ol.style.Style({
        image: new ol.style.Circle({
            radius: 8,
            fill: new ol.style.Fill({color: 'red'}),
            stroke: new ol.style.Stroke({color: 'black', width: 2})
        })
    }) ];
};
