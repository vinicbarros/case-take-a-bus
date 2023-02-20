import React, { useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Button, StyleSheet, View } from "react-native";
import {
  getCurrentPositionAsync,
  LocationObject,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { BusStationData } from "../types/locationTypes";
import MyButton from "../components/MyButton";

export default function Map() {
  const [userLocation, setUserLocation] = useState<LocationObject | null>(null);
  const [busStations, setBusStations] = useState<BusStationData[] | null>(null);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setUserLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  return (
    <View style={styles.container}>
      {userLocation && (
        <>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            showsUserLocation={true}
            initialRegion={{
              latitude: userLocation.coords.latitude,
              longitude: userLocation.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          ></MapView>

          <MyButton
            latitude={userLocation.coords.latitude}
            longitude={userLocation.coords.longitude}
            setBusStations={setBusStations}
          />
        </>
      )}
    </View>
  );
}

const mapStyle = [
  {
    featureType: "transit.station",
    stylers: [
      {
        color: "#f5ab35",
      },
      {
        weight: 8,
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
