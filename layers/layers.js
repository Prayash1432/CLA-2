var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Garden_1 = new ol.format.GeoJSON();
var features_Garden_1 = format_Garden_1.readFeatures(json_Garden_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Garden_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Garden_1.addFeatures(features_Garden_1);
var lyr_Garden_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Garden_1, 
                style: style_Garden_1,
                popuplayertitle: "Garden",
                interactive: true,
                title: '<img src="styles/legend/Garden_1.png" /> Garden'
            });
var format_RoadNetwork_2 = new ol.format.GeoJSON();
var features_RoadNetwork_2 = format_RoadNetwork_2.readFeatures(json_RoadNetwork_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadNetwork_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadNetwork_2.addFeatures(features_RoadNetwork_2);
var lyr_RoadNetwork_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadNetwork_2, 
                style: style_RoadNetwork_2,
                popuplayertitle: "Road Network",
                interactive: true,
                title: '<img src="styles/legend/RoadNetwork_2.png" /> Road Network'
            });
var format_MainGate_3 = new ol.format.GeoJSON();
var features_MainGate_3 = format_MainGate_3.readFeatures(json_MainGate_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainGate_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainGate_3.addFeatures(features_MainGate_3);
var lyr_MainGate_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MainGate_3, 
                style: style_MainGate_3,
                popuplayertitle: "Main Gate",
                interactive: true,
                title: '<img src="styles/legend/MainGate_3.png" /> Main Gate'
            });
var format_Hostels_4 = new ol.format.GeoJSON();
var features_Hostels_4 = format_Hostels_4.readFeatures(json_Hostels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hostels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hostels_4.addFeatures(features_Hostels_4);
var lyr_Hostels_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hostels_4, 
                style: style_Hostels_4,
                popuplayertitle: "Hostels",
                interactive: true,
                title: '<img src="styles/legend/Hostels_4.png" /> Hostels'
            });
var format_Foodcourt_5 = new ol.format.GeoJSON();
var features_Foodcourt_5 = format_Foodcourt_5.readFeatures(json_Foodcourt_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Foodcourt_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Foodcourt_5.addFeatures(features_Foodcourt_5);
var lyr_Foodcourt_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Foodcourt_5, 
                style: style_Foodcourt_5,
                popuplayertitle: "Food court",
                interactive: true,
                title: '<img src="styles/legend/Foodcourt_5.png" /> Food court'
            });
var format_AcademicBuildings_6 = new ol.format.GeoJSON();
var features_AcademicBuildings_6 = format_AcademicBuildings_6.readFeatures(json_AcademicBuildings_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcademicBuildings_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcademicBuildings_6.addFeatures(features_AcademicBuildings_6);
var lyr_AcademicBuildings_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcademicBuildings_6, 
                style: style_AcademicBuildings_6,
                popuplayertitle: "Academic Buildings",
                interactive: true,
                title: '<img src="styles/legend/AcademicBuildings_6.png" /> Academic Buildings'
            });
var format_Labs_7 = new ol.format.GeoJSON();
var features_Labs_7 = format_Labs_7.readFeatures(json_Labs_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Labs_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Labs_7.addFeatures(features_Labs_7);
var lyr_Labs_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Labs_7, 
                style: style_Labs_7,
                popuplayertitle: "Labs",
                interactive: true,
                title: '<img src="styles/legend/Labs_7.png" /> Labs'
            });
var format_Ground_8 = new ol.format.GeoJSON();
var features_Ground_8 = format_Ground_8.readFeatures(json_Ground_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ground_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ground_8.addFeatures(features_Ground_8);
var lyr_Ground_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ground_8, 
                style: style_Ground_8,
                popuplayertitle: "Ground",
                interactive: true,
                title: '<img src="styles/legend/Ground_8.png" /> Ground'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Garden_1.setVisible(true);lyr_RoadNetwork_2.setVisible(true);lyr_MainGate_3.setVisible(true);lyr_Hostels_4.setVisible(true);lyr_Foodcourt_5.setVisible(true);lyr_AcademicBuildings_6.setVisible(true);lyr_Labs_7.setVisible(true);lyr_Ground_8.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Garden_1,lyr_RoadNetwork_2,lyr_MainGate_3,lyr_Hostels_4,lyr_Foodcourt_5,lyr_AcademicBuildings_6,lyr_Labs_7,lyr_Ground_8];
lyr_Garden_1.set('fieldAliases', {'Name': 'Name', });
lyr_RoadNetwork_2.set('fieldAliases', {'Roads': 'Roads', });
lyr_MainGate_3.set('fieldAliases', {'Name': 'Name', });
lyr_Hostels_4.set('fieldAliases', {'Name': 'Name', 'Area': 'Area', 'Floors': 'Floors', });
lyr_Foodcourt_5.set('fieldAliases', {'Name': 'Name', });
lyr_AcademicBuildings_6.set('fieldAliases', {'Name': 'Name', 'Area': 'Area', });
lyr_Labs_7.set('fieldAliases', {'Name': 'Name', });
lyr_Ground_8.set('fieldAliases', {'Name': 'Name', });
lyr_Garden_1.set('fieldImages', {'Name': 'TextEdit', });
lyr_RoadNetwork_2.set('fieldImages', {'Roads': '', });
lyr_MainGate_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_Hostels_4.set('fieldImages', {'Name': '', 'Area': '', 'Floors': '', });
lyr_Foodcourt_5.set('fieldImages', {'Name': '', });
lyr_AcademicBuildings_6.set('fieldImages', {'Name': '', 'Area': '', });
lyr_Labs_7.set('fieldImages', {'Name': '', });
lyr_Ground_8.set('fieldImages', {'Name': '', });
lyr_Garden_1.set('fieldLabels', {'Name': 'header label - visible with data', });
lyr_RoadNetwork_2.set('fieldLabels', {'Roads': 'header label - visible with data', });
lyr_MainGate_3.set('fieldLabels', {'Name': 'header label - visible with data', });
lyr_Hostels_4.set('fieldLabels', {'Name': 'header label - visible with data', 'Area': 'header label - always visible', 'Floors': 'header label - visible with data', });
lyr_Foodcourt_5.set('fieldLabels', {'Name': 'header label - visible with data', });
lyr_AcademicBuildings_6.set('fieldLabels', {'Name': 'header label - visible with data', 'Area': 'header label - visible with data', });
lyr_Labs_7.set('fieldLabels', {'Name': 'header label - visible with data', });
lyr_Ground_8.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_Ground_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});