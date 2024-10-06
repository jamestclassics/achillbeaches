var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_natural_beach_ACHILLISLAND_1 = new ol.format.GeoJSON();
var features_natural_beach_ACHILLISLAND_1 = format_natural_beach_ACHILLISLAND_1.readFeatures(json_natural_beach_ACHILLISLAND_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_natural_beach_ACHILLISLAND_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_natural_beach_ACHILLISLAND_1.addFeatures(features_natural_beach_ACHILLISLAND_1);
var lyr_natural_beach_ACHILLISLAND_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_natural_beach_ACHILLISLAND_1, 
                style: style_natural_beach_ACHILLISLAND_1,
                popuplayertitle: "natural_beach_ACHILL ISLAND",
                interactive: true,
                title: '<img src="styles/legend/natural_beach_ACHILLISLAND_1.png" /> natural_beach_ACHILL ISLAND'
            });

lyr_OSMStandard_0.setVisible(true);lyr_natural_beach_ACHILLISLAND_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_natural_beach_ACHILLISLAND_1];
lyr_natural_beach_ACHILLISLAND_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'natural': 'natural', 'supervised': 'supervised', 'logainm:url': 'logainm:url', 'logainm:ref': 'logainm:ref', 'lifeguard': 'lifeguard', 'sport': 'sport', 'alt_name': 'alt_name', 'place': 'place', 'type': 'type', 'surface': 'surface', 'name:ga': 'name:ga', 'name:en': 'name:en', 'name': 'name', 'access': 'access', });
lyr_natural_beach_ACHILLISLAND_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'natural': 'TextEdit', 'supervised': 'TextEdit', 'logainm:url': 'TextEdit', 'logainm:ref': 'TextEdit', 'lifeguard': 'TextEdit', 'sport': 'TextEdit', 'alt_name': 'TextEdit', 'place': 'TextEdit', 'type': 'TextEdit', 'surface': 'TextEdit', 'name:ga': 'TextEdit', 'name:en': 'TextEdit', 'name': 'TextEdit', 'access': 'TextEdit', });
lyr_natural_beach_ACHILLISLAND_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'natural': 'no label', 'supervised': 'inline label - visible with data', 'logainm:url': 'no label', 'logainm:ref': 'inline label - visible with data', 'lifeguard': 'inline label - visible with data', 'sport': 'no label', 'alt_name': 'no label', 'place': 'inline label - visible with data', 'type': 'no label', 'surface': 'no label', 'name:ga': 'no label', 'name:en': 'no label', 'name': 'inline label - visible with data', 'access': 'no label', });
lyr_natural_beach_ACHILLISLAND_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});