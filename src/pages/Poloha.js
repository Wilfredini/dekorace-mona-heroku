import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Poloha() {
  const center = { lat: 48.984058499732896, lng: 17.328763757527735 };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
  function Map() {
    return (
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    );
  }
}
