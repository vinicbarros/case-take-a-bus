import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
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
  const [loading, setLoading] = useState(false);

  const getNearbyStation = useMutation(async () => {
    return requestNearbyBusStation({ latitude, longitude });
  });

  const showBusStations = async () => {
    if (busStations) return setBusStations(null);
    setLoading(true);

    try {
      const data = await getNearbyStation.mutateAsync();
      setBusStations(data);
      setLoading(false);
    } catch (error) {
      console.log(JSON.stringify(error));
      setLoading(false);
    }
  };

  return (
    <TouchableOpacity
      onPress={showBusStations}
      style={loading ? styles.disabledButtonContainer : styles.buttonContainer}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator
          size="large"
          animating={true}
          color={"#fff"}
          style={{ alignSelf: "center", justifyContent: "center" }}
        />
      ) : (
        <Image
          source={require("../assets/image/logo_take_a_bus.png")}
          style={styles.imageLogo}
        />
      )}
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

  disabledButtonContainer: {
    position: "absolute",
    bottom: 20,
    width: 80,
    height: 80,
    backgroundColor: "#f5ab35",
    opacity: 0.9,
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
