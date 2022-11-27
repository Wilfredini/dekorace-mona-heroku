import React from "react";
import ImgPoloha from "../images/Poloha.jpg";

import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";

export default function Poloha() {
  const center = { lat: 48.983929, lng: 17.328741 };
  const markerCoor = { lat: 48.983929, lng: 17.328741 };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
  function Map() {
    return (
      <GoogleMap
        zoom={18}
        center={center}
        mapContainerClassName="map-container"
      >
        <MarkerF title="Dekorace Mona" position={markerCoor}>
          <InfoWindow position={center}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h4 className="pb-2">Dekorace Mona</h4>
              <img
                className="pb-2"
                src={ImgPoloha}
                alt="Info foto"
                width="100px"
                height="70px"
              />
              <a href="https://www.google.com/maps/place/Velkomoravsk%C3%A1+503,+696+85+Moravsk%C3%BD+P%C3%ADsek/@48.9839247,17.3265536,17z/data=!4m13!1m7!3m6!1s0x47133c5750596283:0x9503b8c07f93458f!2sVelkomoravsk%C3%A1+503,+696+85+Moravsk%C3%BD+P%C3%ADsek!3b1!8m2!3d48.9839212!4d17.3287423!3m4!1s0x47133c5750596283:0x9503b8c07f93458f!8m2!3d48.9839212!4d17.3287423?hl=cs-CZ">
                Zobrazit na mapách Google
              </a>
            </div>
          </InfoWindow>
        </MarkerF>
      </GoogleMap>
    );
  }
}
