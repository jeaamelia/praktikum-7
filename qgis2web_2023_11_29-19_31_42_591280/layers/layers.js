var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UPVIIWonokromo_1 = new ol.format.GeoJSON();
var features_UPVIIWonokromo_1 = format_UPVIIWonokromo_1.readFeatures(json_UPVIIWonokromo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPVIIWonokromo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPVIIWonokromo_1.addFeatures(features_UPVIIWonokromo_1);
var lyr_UPVIIWonokromo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UPVIIWonokromo_1, 
                style: style_UPVIIWonokromo_1,
                interactive: true,
                title: '<img src="styles/legend/UPVIIWonokromo_1.png" /> UP VII Wonokromo'
            });
var format_FixedGeometriesUPVIIWonokromo_2 = new ol.format.GeoJSON();
var features_FixedGeometriesUPVIIWonokromo_2 = format_FixedGeometriesUPVIIWonokromo_2.readFeatures(json_FixedGeometriesUPVIIWonokromo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FixedGeometriesUPVIIWonokromo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FixedGeometriesUPVIIWonokromo_2.addFeatures(features_FixedGeometriesUPVIIWonokromo_2);
var lyr_FixedGeometriesUPVIIWonokromo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FixedGeometriesUPVIIWonokromo_2, 
                style: style_FixedGeometriesUPVIIWonokromo_2,
                interactive: true,
                title: '<img src="styles/legend/FixedGeometriesUPVIIWonokromo_2.png" /> Fixed Geometries UP VII Wonokromo'
            });
var format_JaringanJalanUPVIIWonokromo_3 = new ol.format.GeoJSON();
var features_JaringanJalanUPVIIWonokromo_3 = format_JaringanJalanUPVIIWonokromo_3.readFeatures(json_JaringanJalanUPVIIWonokromo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalanUPVIIWonokromo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalanUPVIIWonokromo_3.addFeatures(features_JaringanJalanUPVIIWonokromo_3);
var lyr_JaringanJalanUPVIIWonokromo_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanJalanUPVIIWonokromo_3, 
                style: style_JaringanJalanUPVIIWonokromo_3,
                interactive: true,
                title: '<img src="styles/legend/JaringanJalanUPVIIWonokromo_3.png" /> Jaringan Jalan UP VII Wonokromo'
            });
var format_PointKesehatan_4 = new ol.format.GeoJSON();
var features_PointKesehatan_4 = format_PointKesehatan_4.readFeatures(json_PointKesehatan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointKesehatan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointKesehatan_4.addFeatures(features_PointKesehatan_4);
var lyr_PointKesehatan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PointKesehatan_4, 
                style: style_PointKesehatan_4,
                interactive: true,
                title: '<img src="styles/legend/PointKesehatan_4.png" /> Point Kesehatan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_UPVIIWonokromo_1.setVisible(true);lyr_FixedGeometriesUPVIIWonokromo_2.setVisible(true);lyr_JaringanJalanUPVIIWonokromo_3.setVisible(true);lyr_PointKesehatan_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_UPVIIWonokromo_1,lyr_FixedGeometriesUPVIIWonokromo_2,lyr_JaringanJalanUPVIIWonokromo_3,lyr_PointKesehatan_4];
lyr_UPVIIWonokromo_1.set('fieldAliases', {'Kode': 'Kode', 'Keterangan': 'Keterangan', 'Zona': 'Zona', 'Sub_Zona': 'Sub_Zona', 'Kawasan': 'Kawasan', 'Sub_UP': 'Sub_UP', 'UP': 'UP', 'Blok': 'Blok', 'Luas': 'Luas', });
lyr_FixedGeometriesUPVIIWonokromo_2.set('fieldAliases', {'Kode': 'Kode', 'Keterangan': 'Keterangan', 'Zona': 'Zona', 'Sub_Zona': 'Sub_Zona', 'Kawasan': 'Kawasan', 'Sub_UP': 'Sub_UP', 'UP': 'UP', 'Blok': 'Blok', 'Luas': 'Luas', });
lyr_JaringanJalanUPVIIWonokromo_3.set('fieldAliases', {'Status': 'Status', 'Nama': 'Nama', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Panjang': 'Panjang', 'UP': 'UP', });
lyr_PointKesehatan_4.set('fieldAliases', {'id': 'id', 'Status': 'Status', 'Jangkauan': 'Jangkauan', });
lyr_UPVIIWonokromo_1.set('fieldImages', {'Kode': '', 'Keterangan': '', 'Zona': '', 'Sub_Zona': '', 'Kawasan': '', 'Sub_UP': '', 'UP': '', 'Blok': '', 'Luas': '', });
lyr_FixedGeometriesUPVIIWonokromo_2.set('fieldImages', {'Kode': '', 'Keterangan': '', 'Zona': '', 'Sub_Zona': '', 'Kawasan': '', 'Sub_UP': '', 'UP': '', 'Blok': '', 'Luas': '', });
lyr_JaringanJalanUPVIIWonokromo_3.set('fieldImages', {'Status': '', 'Nama': '', 'Keterangan': '', 'Sumber': '', 'Panjang': '', 'UP': '', });
lyr_PointKesehatan_4.set('fieldImages', {'id': 'TextEdit', 'Status': 'TextEdit', 'Jangkauan': 'TextEdit', });
lyr_UPVIIWonokromo_1.set('fieldLabels', {'Kode': 'no label', 'Keterangan': 'no label', 'Zona': 'no label', 'Sub_Zona': 'no label', 'Kawasan': 'no label', 'Sub_UP': 'no label', 'UP': 'no label', 'Blok': 'no label', 'Luas': 'no label', });
lyr_FixedGeometriesUPVIIWonokromo_2.set('fieldLabels', {'Kode': 'no label', 'Keterangan': 'no label', 'Zona': 'no label', 'Sub_Zona': 'no label', 'Kawasan': 'no label', 'Sub_UP': 'no label', 'UP': 'no label', 'Blok': 'no label', 'Luas': 'no label', });
lyr_JaringanJalanUPVIIWonokromo_3.set('fieldLabels', {'Status': 'inline label', 'Nama': 'header label', 'Keterangan': 'inline label', 'Sumber': 'no label', 'Panjang': 'no label', 'UP': 'no label', });
lyr_PointKesehatan_4.set('fieldLabels', {'id': 'no label', 'Status': 'inline label', 'Jangkauan': 'inline label', });
lyr_PointKesehatan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});