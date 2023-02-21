import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useMutation } from "react-query";
import requestNearbyBusStation from "../services/locationService";
import { BusStationData } from "../types/locationTypes";

export default function MyButton({
  latitude,
  longitude,
  busStations,
  setBusStations,
}: {
  latitude: number;
  longitude: number;
  busStations: BusStationData[] | null;
  setBusStations: React.Dispatch<React.SetStateAction<BusStationData[] | null>>;
}) {
  const getNearbyStation = useMutation(async () => {
    return requestNearbyBusStation({ latitude, longitude });
  });

  const showBusStations = async () => {
    if (busStations) return setBusStations(null);

    try {
      const data = await getNearbyStation.mutateAsync();
      setBusStations(data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  return (
    <TouchableOpacity
      onPress={showBusStations}
      style={styles.buttonContainer}
    >
      <Image
        source={require("../assets/image/logo_take_a_bus.png")}
        style={styles.imageLogo}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    width: 80,
    height: 80,
    backgroundColor: "#f5ab35",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  imageLogo: {
    width: 40,
    height: 40,
  },
});
