/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useEffect } from 'react';
/* eslint-disable import/no-unresolved */
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

mapboxgl.accessToken = process.env.REACT_APP_BUDGET_MAPBOX_TOKEN;

// eslint-disable-next-line react/prop-types
const Map = ({ lat, lng, company }) => {
  const mapContainer = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/barsh11/cklz5kzve7y0617ljnpgoo0px',
      center: [lng, lat],
    });

    const bounds = new mapboxgl.LngLatBounds();

    const el = document.createElement('div');
    el.style.backgroundImage =
      "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ1LjM1NHB4IiBoZWlnaHQ9IjQ1LjM1NHB4IiB2aWV3Qm94PSIwIDAgNDUuMzU0IDQ1LjM1NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUuMzU0IDQ1LjM1NDsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yMi42NzcsMEMxMi41MDksMCw0LjI2Niw4LjI0Myw0LjI2NiwxOC40MTFjMCw5LjIyNCwxMS40NzEsMjEuMzYsMTYuMzA1LDI2LjA2NWMxLjE4NCwxLjE1LDMuMDU2LDEuMTc0LDQuMjYzLDAuMDQ3DQoJCQljNC44NjMtNC41MzMsMTYuMjU0LTE2LjIxMSwxNi4yNTQtMjYuMTEzQzQxLjA4Nyw4LjI0MywzMi44NDUsMCwyMi42NzcsMHogTTIyLjY3NywyNC4zOTNjLTQuMjA0LDAtNy42MS0zLjQwNi03LjYxLTcuNjA5DQoJCQlzMy40MDYtNy42MSw3LjYxLTcuNjFjNC4yMDMsMCw3LjYwOCwzLjQwNiw3LjYwOCw3LjYxUzI2Ljg4LDI0LjM5MywyMi42NzcsMjQuMzkzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K')";
    el.style.backgroundSize = 'contain';
    el.style.backgroundRepeat = 'no-repeat';
    el.style.width = '2rem';
    el.style.height = '3rem';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat([lng, lat])
      .addTo(map);

    const popupOffsets = {
      top: [0, 0],
      'top-left': [0, 0],
      'top-right': [0, 0],
      bottom: [0, -50],
    };

    new mapboxgl.Popup({
      offset: popupOffsets,
    })
      .setLngLat([lng, lat])
      .setHTML(`<p>${company}</p>`)
      .addTo(map);

    bounds.extend([lng, lat]);

    map.fitBounds(bounds, {
      padding: { top: 100, bottom: 250, left: 150, right: 50 },
      maxZoom: 10,
    });

    return () => map.remove();
  }, []);

  return (
    <div>
      <div className="map-container" ref={mapContainer} />
    </div>
  );
};

export default Map;
