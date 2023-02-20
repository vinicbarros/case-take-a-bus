import { BusStationData } from "../types/locationTypes";
import api from "./api";

export async function getNearbyBusStation({
  latitude,
  longitude,
}: {
  latitude: string;
  longitude: string;
}): Promise<BusStationData[]> {
  const response = await api.post("/location", { latitude, longitude });

  return response.data as BusStationData[];
}
