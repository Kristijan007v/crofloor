import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Maintenance from "./maintenance";

var maintenance: "true" | "false";
maintenance = "false";

function MyApp({ Component, pageProps }: AppProps) {
  if (maintenance === "false") {
    return <Component {...pageProps} />;
  } else {
    return <Maintenance />;
  }
}

export default appWithTranslation(MyApp);
