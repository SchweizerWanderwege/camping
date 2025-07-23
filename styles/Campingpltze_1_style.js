function categories_Campingpltze_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
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
                    src: "styles/campground-solid_green.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
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
                    src: "styles/campground-solid_orange.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
        default:
            // Show a red circle for debugging
            return [ new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 8,
                    fill: new ol.style.Fill({color: 'red'}),
                    stroke: new ol.style.Stroke({color: 'black', width: 2})
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                                      labelFill, placement, bufferColor,
                                      bufferWidth)
            })];
    }
};
