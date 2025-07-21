var wms_layers = [];


    var projection_NationalMapscolor_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_NationalMapscolor_0 = projection_NationalMapscolor_0.getExtent();
    var size_NationalMapscolor_0 = ol.extent.getWidth(projectionExtent_NationalMapscolor_0) / 256;
    var resolutions_NationalMapscolor_0 = new Array(14);
    var matrixIds_NationalMapscolor_0 = new Array(14);
    for (var z = 0; z < 25; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_NationalMapscolor_0[z] = size_NationalMapscolor_0 / Math.pow(2, z);
        matrixIds_NationalMapscolor_0[z] = z;
    }
    var lyr_NationalMapscolor_0 = new ol.layer.Tile({
                            source: new ol.source.XYZ(({
                                url: "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg",
                                attributions: '© <a href="https://www.swisstopo.admin.ch/">Swisstopo</a>',

              projection: projection_NationalMapscolor_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_NationalMapscolor_0),
                resolutions: resolutions_NationalMapscolor_0,
                matrixIds: matrixIds_NationalMapscolor_0
              }),
              style: 'ch.swisstopo.pixelkarte-farbe',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Landeskarte',
                            opacity: 1.0,
                            
                            
                          });
var format_Campingpltze_1 = new ol.format.GeoJSON();
var features_Campingpltze_1 = format_Campingpltze_1.readFeatures(json_Campingpltze_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Campingpltze_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campingpltze_1.addFeatures(features_Campingpltze_1);
var lyr_Campingpltze_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Campingpltze_1, 
                style: style_Campingpltze_1,
                popuplayertitle: 'Camping',
                interactive: true,
    title: 'Camping<br />\
    <img src="styles/legend/Campingpltze_1_0.png" /> 1,018<br />\
    <img src="styles/legend/Campingpltze_1_1.png" /> 1,021<br />' });

lyr_NationalMapscolor_0.setVisible(true);lyr_Campingpltze_1.setVisible(true);
var layersList = [lyr_NationalMapscolor_0,lyr_Campingpltze_1];
lyr_Campingpltze_1.set('fieldAliases', {'ID': 'ID', 'SYMBOL': 'SYMBOL', 'Long': 'Long', 'Lat': 'Lat', 'x': 'x', 'y': 'y', 'Spalte1': 'Campingplatz', 'URL': 'Link', });
lyr_Campingpltze_1.set('fieldImages', {'ID': 'Range', 'SYMBOL': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Spalte1': 'TextEdit', 'URL': 'TextEdit', });
lyr_Campingpltze_1.set('fieldLabels', {'ID': 'hidden field', 'SYMBOL': 'hidden field', 'Long': 'hidden field', 'Lat': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'Spalte1': 'header label - always visible', 'URL': 'inline label - always visible', });
lyr_Campingpltze_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});