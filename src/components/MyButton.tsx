import { Text, TouchableOpacity, View } from "react-native";
import { useMutation } from "react-query";
import { requestNearbyBusStation } from "../services/locationService";
import { BusStationData } from "../types/locationTypes";

export default function MyButton({
  latitude,
  longitude,
  setBusStations,
}: {
  latitude: number;
  longitude: number;
  setBusStations: React.Dispatch<React.SetStateAction<BusStationData[] | null>>;
}) {
  const getNearbyStation = useMutation(async () => {
    return requestNearbyBusStation({ latitude, longitude });
  });

  const showBusStations = async () => {
    try {
      const data = await getNearbyStation.mutateAsync();
      console.log(data);
      setBusStations(data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  return (
    <TouchableOpacity onPress={showBusStations}>
      <Text>OPA</Text>
    </TouchableOpacity>
  );
}
