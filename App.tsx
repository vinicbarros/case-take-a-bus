import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Map from "./src/screen/Map";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Map />
    </QueryClientProvider>
  );
}
