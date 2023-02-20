import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Button, StyleSheet, View } from "react-native";

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        showsUserLocation={true}
      ></MapView>
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
