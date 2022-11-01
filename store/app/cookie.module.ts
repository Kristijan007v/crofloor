import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CookieState } from "../../interfaces/model";

export const useCookieStore = create<CookieState>((set) => ({
  //it is called CookieConsent in Cookies s
  getConsentCookie: () => {
    const consentCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("CookieConsent"))
      ?.split("=")[1];
    return consentCookie === "true";
  },
}));
