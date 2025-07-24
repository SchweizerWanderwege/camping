var style_Campingpltze_1 = function(feature, resolution){
    var value = feature.get("SYMBOL");
    var iconSrc = (value === "1.018")
        ? "styles/campground-solid_green.png"
        : "styles/campground-solid_orange.png";
    return [ new ol.style.Style({
        image: new ol.style.Icon({
            src: iconSrc,
            scale: 0.05 // adjust as needed for your SVG
        })
    }) ];
};
