import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const Map = () => {

    const {isLoaded} = useJsApiLoader({
        id: 'mygooglemapfaer',
        googleMapsApiKey: 'AIzaSyB2Nc8a3Qg4IG__s_TOrDU0m1M8ka2-njI',
    })

      
    const center = {
        lat: 22.402022,
        lng: 91.881997,
    }

  return isLoaded ? <>
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "444px" }}
      center={center}
      zoom={12}
    >
        <Marker position={center} />
    </GoogleMap>
  </> : <></>
}

export default Map