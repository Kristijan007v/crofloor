import create from "zustand";
import { LocationsState } from "../../interfaces/model";

export const useLocationStore = create<LocationsState>((set) => ({
  showLocationInfo: false,
  locationInfo: {
    image: "",
    title: "",
    description: "",
    contactInfo: {
      address: "",
      phone: "",
      email: "",
    },
    workingHours: {
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
    },
    googleMaps: "",
    googleMapsLink: "",
  },
  setLocationInfo: (locationInfo) => {
    set({ locationInfo, showLocationInfo: true });
  },
}));
