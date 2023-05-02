import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useMemo } from 'react';
import { Consultation } from '../../components';

export function Contacts() {
  const COUNTRY_CITY = { lat: 34.528105, lng: 69.18461 };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyB1GRkshHSaTIFIpCZqbAxP8H18kZzb5CI'
  });

  const position = useMemo(() => COUNTRY_CITY);

  return (
    <div className='wrapper contacts-page'>
      <h1>Contacts</h1>
      <div className='contacts-page__hours'>
        <h6>Working hours:</h6>
        <p>Monday - Friday: 10:00-18:00</p>
        <p>Saturday: 11:00-14:00</p>
        <p>Sunday: Day off</p>
      </div>
      {!isLoaded && <div>Google maps not loaded(</div>}
      {isLoaded && (
        <div className='map-wrapper'>
          <div className='map-wrapper__info'>
            <h2>Our location</h2>
            <div className='contacts-page__hours'>
              <p>Kabol, Afghanistan, Asghasjka street, 14</p>
            </div>
          </div>
          <GoogleMap
            zoom={10}
            center={position}
            mapContainerClassName='contacts-page-map'
          >
            <MarkerF position={position} />
          </GoogleMap>
        </div>
      )}
      <Consultation />
    </div>
  );
}
