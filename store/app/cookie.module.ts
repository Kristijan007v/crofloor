import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CookieState } from "../../interfaces/model";

interface SettingsState {
  showSettings: boolean;
  setShowSettings: (showSettings: boolean) => void;
}

export const useCookieStore = create<CookieState>()(
  devtools(
    persist(
      (set, get) => ({
        showCookie: true,
        setCookie: (showCookie: boolean) => set({ showCookie }),
        getCookie: () => get().showCookie,
      }),
      {
        name: "cookie-storage",
        getStorage: () => localStorage,
      }
    )
  )
);

// export const useSettingsStore = create<SettingsState>(){
//   (set, get) => ({
//     showSettings: false,
//     setShowSettings: (showSettings: boolean) => set({ showSettings }),
//   })
// }
