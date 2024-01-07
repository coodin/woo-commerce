import { useEffect, useRef, useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

type MapProps = { address?: string };

const Map: React.FC<MapProps> = ({ address }) => {
  const mapRef = useRef(null);

  // laod script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });
  if (!isLoaded) return <div>Loading....</div>;
  // static lat and lng
  const center = {
    lat: 40.73061,
    lng: -73.935242,
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {/* map component  */}
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "100%", height: "450px" }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};
export default Map;
