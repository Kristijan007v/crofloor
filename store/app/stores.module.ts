import create from "zustand";
import { StoresState } from "../../interfaces/model";

export const useStoresStore = create<StoresState>((set) => ({
  locations: [
    {
      city: "Zagreb",
      selected: true,
      googleMaps:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.288822899135!2d15.995049615760072!3d45.74535542265931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d58973f415f3%3A0xac6045f06d3a4bd2!2sPo%C5%BEgaj%20Grupa%20-%20prodajni%20salon!5e0!3m2!1sen!2shr!4v1667307863690!5m2!1sen!2shr",
    },
    {
      city: "Varaždin",
      selected: false,
      googleMaps:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.608845719314!2d16.33428111577399!3d46.29774458545724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4768ab85106ecb87%3A0x1aec5ba3e0166be7!2sPO%C5%BDGAJ%20Grupa!5e0!3m2!1sen!2shr!4v1667309900302!5m2!1sen!2shr",
    },
    {
      city: "Osijek",
      selected: false,
      googleMaps:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.294196174025!2d18.648890715755517!3d45.564522134764395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce716a0c72373%3A0x1b7c2ab04848344b!2sPo%C5%BEgaj%20Grupa%20-%20prodajni%20salon!5e0!3m2!1sen!2shr!4v1667310530171!5m2!1sen!2shr",
    },
    {
      city: "Split",
      selected: false,
      googleMaps:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.586926381489!2d16.47831191570543!3d43.51095206963502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355f4e1a282843%3A0x60960a6a7ab2b933!2sPo%C5%BEgaj%20Grupa%20-%20prodajni%20salon!5e0!3m2!1sen!2shr!4v1667310190956!5m2!1sen!2shr",
    },
  ],
  googleMaps:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.288822899135!2d15.995049615760072!3d45.74535542265931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d58973f415f3%3A0xac6045f06d3a4bd2!2sPo%C5%BEgaj%20Grupa%20-%20prodajni%20salon!5e0!3m2!1sen!2shr!4v1667307863690!5m2!1sen!2shr",
  setLocationMap: (googleMaps) => {
    set({ googleMaps });
  },
}));

// const setSelectedLocation = (googleMaps: string) => {
//   const locations = useStoresStore.getState().locations;
//   const newLocations = locations.map((location) => {
//     if (location.googleMaps === googleMaps) {
//       location.selected = true;
//     } else {
//       location.selected = false;
//     }
//     return location;
//   });
//   useStoresStore.setState({ locations: newLocations });
// };
