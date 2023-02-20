export type BusStationData = {
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  photos: [
    {
      height: number;
      html_attributions: [string];
      photo_reference: string;
      width: number;
    }
  ];
  place_id: string;
  reference: string;
  scope: string;
  types: string[];
  vicinity: string;
};
