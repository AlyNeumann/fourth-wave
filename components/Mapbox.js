import { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export default function Map(props) {

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY;
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/alymarguerite/ck30gwnu40z7y1cm8lumnxcoe',
            center: [-79.4512, 43.6568],
            zoom: 8
        });
        map.current.on('click', (e) => {
            console.log(e);
        })
        map.current.on('results', (e) => {
            console.log(e)
        })
        const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            zoom: 4,
            placeholder: 'enter the city name',
            mapboxgl: mapboxgl
        })

        map.current.addControl(geocoder)

        geocoder.on('result', (e) => {
            props.setCoords(e.result.center)
        });
    });

    return (
        <div  className="map-container" ref={mapContainer} />
    )
}