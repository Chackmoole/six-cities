import {useRef, useEffect} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

interface Location {
    latitude: number;
    longitude: number;
    zoom: number;
}

interface IProps {
  city: {
    name: string;
    location: Location;
  };
}

export const Map = ({city}: IProps) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (mapContainer.current) {
      new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [city.location.longitude, city.location.latitude],
        zoom: city.location.zoom,
      });

    }
  }, [city]);

  return (
    <div
      ref={mapContainer}
      style={{width: '100%', height: '1000px'}}
    />
  );
};
