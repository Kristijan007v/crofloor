export interface CookieState {
  showCookie: boolean;
  setCookie: (showCookie: boolean) => void;
}

type LocationInfo = {
  image: string;
  title: string;
  description: string;
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
  workingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday?: string;
  };
  googleMaps: string;
  googleMapsLink: string;
};

export interface LocationsState {
  showLocationInfo: boolean;
  locationInfo: LocationInfo;
  setLocationInfo: (locationInfo: LocationInfo) => void;
}

export interface Locations {
  image: string;
  cityName: string;
  address: string;
  href: string;
  cityPosition: "left" | "right";
  tagPosition: "left" | "right";
  locationInfo: LocationInfo;
}
