import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { locations } from '../models/Map.js';

export default function Map(props) {

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY;
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/alymarguerite/ck30gwnu40z7y1cm8lumnxcoe',
            center: [-100.643359, 36.464697],
            zoom: 0,
            maxBounds: [-135.817461, 15.888320, -51.302448, 60.781126]
        });

        map.current.on('load', () => {
            map.current.loadImage(
                'https://fourth-wave-images.4everland.store/auntie_Marker.png',
                (error, image) => {
                    if (error) throw error;
                    map.current.addImage('custom-marker', image);
                    // Add a GeoJSON source with 2 points
                    map.current.addSource('points', {
                        'type': 'geojson',
                        'data': locations,
                    });

                    map.current.addLayer({
                        'id': 'points',
                        'type': 'symbol',
                        'source': 'points',
                        'layout': {
                            'icon-image': 'custom-marker',
                            "icon-size": 0.5,
                            "icon-allow-overlap": true,
                            // get the title name from the source's "title" property
                            'text-field': [
                                'format',
                                ['upcase', ['get', 'title']]
                            ],
                            'text-font': [
                                'literal',
                                ['Open Sans Bold', 'Arial Unicode MS Bold']
                            ],
                            'text-offset': [0, 1.25],
                            'text-anchor': 'top'
                        },
                        // 'paint': {
                        //     "text-color": "#faf2fc"
                        // }
                    });
                }
            )

        });

    });

    return (
        <div className="map-container-home" ref={mapContainer} />
    )
}