import { BusStationData } from "../types/locationTypes";
import api from "./api";

export async function requestNearbyBusStation({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}): Promise<BusStationData[]> {
  const response = await api.post("/location", { latitude, longitude });
  return response.data as BusStationData[];
}
