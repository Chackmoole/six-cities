import {useRef, useEffect} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import iconMarker from '../../assets/img/pin.svg';

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
      const map = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [city.location.longitude, city.location.latitude],
        zoom: city.location.zoom,
      });

      const marker = document.createElement('div');
      marker.className = 'custom-marker';
      marker.style.backgroundImage = `url(${iconMarker})`;
      marker.style.width = '27px';
      marker.style.height = '39px';
      marker.style.cursor = 'pointer';
      marker.style.backgroundSize = '100%';

      new maplibregl.Marker({element: marker}).setLngLat([city.location.longitude, city.location.latitude]).addTo(map);

    }
  }, [city]);

  return (
    <div
      ref={mapContainer}
      style={{width: '100%', height: '1000px'}}
    />
  );
};
