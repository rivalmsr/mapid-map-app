import React, { useState, useEffect } from 'react';
import MapGL, { Source, Layer, Popup, NavigationControl, GeolocateControl } from '@urbica/react-map-gl';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getPoints, pointSelectors } from '../../features/pointSlice';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles.css';

const MainMap = () => {
  const dispatch = useDispatch();
  const points = useSelector(pointSelectors.selectAll);
  const [popups, setPopups] = useState([]);
  const MAPBOX_ACCESS_TOKEN = `pk.eyJ1Ijoicml2YWxtc3IiLCJhIjoiY2todnRicmQ5MGVieDJzbzJwZ3A2ZXFwOSJ9.r18oZ3q8kJgsrcIFR-e6hg`;

  useEffect(() => {
    dispatch(getPoints());
  }, [dispatch]);

  const [viewport, setViewport] = useState({
    latitude: -6.9448,
    longitude: 107.6556,
    zoom: 12,
  });

  const getColor = (_status) => {
    let selectedColor = '#1E5E96';
    switch (_status) {
      case 'Merah':
        selectedColor = '#8b0000';
        break;
      case 'Kuning':
        selectedColor = '#ffff00';
        break;
      case 'Hijau':
        selectedColor = '#006400';
        break;
      default:
        return selectedColor;
    }

    return selectedColor;
  };

  const handleShowPopup = (_point) => {
    let _popups = [_point];
    return setPopups(_popups);
  };

  return (
    <>
      <nav className="bg-white text-gray-500 px-2.5 sm:px-4 py-2">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://mapid.co.id/" className="flex">
            <img src="https://mapid.co.id/img/mapid_logo_warna-min.png" className="w-32 h-auto mr-3" alt="MAPID" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">Point Mapping</span>
          </a>
        </div>
      </nav>

      <MapGL
        style={{ width: '100%', height: '95vh' }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        accessToken={MAPBOX_ACCESS_TOKEN}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        onViewportChange={setViewport}
      >
        {points.length !== 0 &&
          points.map((point) => (
            <React.Fragment key={point.key}>
              <Source id={point.key} type="geojson" data={point} />
              <Layer
                id={point.key}
                type="circle"
                source={point.key}
                paint={{ 'circle-radius': 10, 'circle-color': `${getColor(point.properties.Status)}` }}
                onClick={() => handleShowPopup(point)}
              />
            </React.Fragment>
          ))}

        {popups.length !== 0 &&
          popups.map((popup) => (
            <Popup
              className="text-gray-500"
              key={popup.key}
              jus
              longitude={popup.geometry.coordinates[0]}
              latitude={popup.geometry.coordinates[1]}
            >
              <div>
                nama : <span className="font-bold">{popup.properties.Nama}</span>{' '}
              </div>
              <div>
                status : <span className="font-bold">{popup.properties.Status}</span>
              </div>
              <div>
                angka : <span className="font-bold">{popup.properties.Angka}</span>
              </div>
            </Popup>
          ))}

        <NavigationControl showCompass showZoom position="top-right" />
        <GeolocateControl position="top-right" />
      </MapGL>
    </>
  );
};

export default MainMap;
