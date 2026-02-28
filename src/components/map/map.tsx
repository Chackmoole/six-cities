import {useRef, useEffect} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import iconMarker from '../../assets/img/pin.svg';
import {useSelector} from 'react-redux';
import { getOfferLocations} from '../../store/getters';

interface ILocation {
    latitude: number;
    longitude: number;
    zoom: number;
}

interface IProps {
  city: {
    name: string;
    location: ILocation;
  };
  heightStyle: string;
}


export const Map = ({city, heightStyle}: IProps) => {
  const mapContainer = useRef(null);
  const locations = useSelector(getOfferLocations);

  useEffect(() => {
    if (mapContainer.current) {
      const map = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [city.location.longitude, city.location.latitude],
        zoom: city.location.zoom,
      });
      if (locations){ locations.map((location) => {
        const marker = document.createElement('div');
        marker.style.backgroundImage = `url(${iconMarker})`;
        marker.style.width = '27px';
        marker.style.height = '39px';
        marker.style.cursor = 'pointer';

        new maplibregl.Marker({element: marker}).setLngLat([location.longitude, location.latitude]).addTo(map);
      });}


    }
  }, [city]);

  return (
    <div
      ref={mapContainer}
      style={{width: '100%', height: heightStyle}}
    />
  );
};
