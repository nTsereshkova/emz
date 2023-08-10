import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './Location.css';

const Location = () => {
  return (
    <div>
      <YMaps>
        <Map defaultState={{ center: [52.44, 30.98], zoom: 16 }} className="map">
          <Placemark
            geometry={[52.442252, 30.98178]}
            options={{
              preset: 'islands#icon',
              iconColor: '#021533',
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default Location;
