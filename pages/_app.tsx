import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Maintenance from "./maintenance";

function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "false") {
    return <Component {...pageProps} />;
  } else {
    return <Maintenance />;
  }
}

export default appWithTranslation(MyApp);
