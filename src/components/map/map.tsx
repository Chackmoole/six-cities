import {useRef, useEffect} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (mapContainer.current) {
      new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [4.85309666406198, 52.3909553943508],
        zoom: 9
      });
    }
  }, []);
  return (
    <div ref={mapContainer}
      style={{width: '100%', height: '1000px'}}
    />
  );
};
