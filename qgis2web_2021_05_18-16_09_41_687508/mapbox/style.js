
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "HH_WFS_Corona_Testzentrentestzentren_barrierefrei_1": {
            "type": "geojson",
            "data": json_HH_WFS_Corona_Testzentrentestzentren_barrierefrei_1
        }
                    ,
        "HH_WFS_Corona_Testzentrentestzentren_2": {
            "type": "geojson",
            "data": json_HH_WFS_Corona_Testzentrentestzentren_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_HH_WFS_Corona_Testzentrentestzentren_barrierefrei_1_0",
            "type": "circle",
            "source": "HH_WFS_Corona_Testzentrentestzentren_barrierefrei_1",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'testung'], 'Antigen'], ['/', 10.714285714285714, 2], ['==', ['get', 'testung'], 'Antigen und PCR'], ['/', 10.714285714285714, 2], ['/', 7.142857142857142, 2]], 'circle-color': ['case', ['==', ['get', 'testung'], 'Antigen'], '#1f78b4', ['==', ['get', 'testung'], 'Antigen und PCR'], '#a6cee3', '#e12044'], 'circle-opacity': ['case', ['==', ['get', 'testung'], 'Antigen'], 1.0, ['==', ['get', 'testung'], 'Antigen und PCR'], 1.0, 1.0], 'circle-stroke-width': ['case', ['==', ['get', 'testung'], 'Antigen'], 1, ['==', ['get', 'testung'], 'Antigen und PCR'], 1, 1], 'circle-stroke-color': ['case', ['==', ['get', 'testung'], 'Antigen'], '#232323', ['==', ['get', 'testung'], 'Antigen und PCR'], '#232323', '#232323']}
        }
,
        {
            "id": "lyr_HH_WFS_Corona_Testzentrentestzentren_2_0",
            "type": "circle",
            "source": "HH_WFS_Corona_Testzentrentestzentren_2",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'testung'], 'Antigen'], ['/', 10.714285714285714, 2], ['==', ['get', 'testung'], 'Antigen und PCR'], ['/', 10.714285714285714, 2], ['/', 7.142857142857142, 2]], 'circle-color': ['case', ['==', ['get', 'testung'], 'Antigen'], '#e31a1c', ['==', ['get', 'testung'], 'Antigen und PCR'], '#ff7f00', '#e12044'], 'circle-opacity': ['case', ['==', ['get', 'testung'], 'Antigen'], 1.0, ['==', ['get', 'testung'], 'Antigen und PCR'], 1.0, 1.0], 'circle-stroke-width': ['case', ['==', ['get', 'testung'], 'Antigen'], 1, ['==', ['get', 'testung'], 'Antigen und PCR'], 1, 1], 'circle-stroke-color': ['case', ['==', ['get', 'testung'], 'Antigen'], '#232323', ['==', ['get', 'testung'], 'Antigen und PCR'], '#232323', '#232323']}
        }
],
}