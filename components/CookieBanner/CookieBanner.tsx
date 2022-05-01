import React, { useEffect, useState, useLayoutEffect } from "react";
import ButtonDefault from "../Buttons/ButtonDefault";
import Overlay from "../Overlay/Overlay";
import { useTranslation } from "next-i18next";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function CookieBanner() {
  const [cookie, setCookie] = useLocalStorage<string>("cookieBanner", "true");
  const { t } = useTranslation("cookieBanner");

  const [show, setShow] = useState(false);

  return (
    <>
      {show && (
        <Overlay
          onclick={() => {
            setShow(false);
          }}
        >
          <div className="fixed bottom-0 m-4 rounded-3xl bg-white p-6">
            <div className="flex w-full flex-col space-y-3">
              <p className="text-center text-xl font-semibold">{t("title")}</p>
              <p className="text-left">{t("description")}</p>
              <div className="flex flex-col space-y-2">
                <ButtonDefault
                  text={t("button-accept")}
                  ariaLabel={t("button-accept")}
                  onclick={() => {
                    setCookie("false");
                  }}
                />
                <ButtonDefault
                  text={t("button-settings")}
                  ariaLabel={t("button-settings")}
                  onclick={() => setShow(false)}
                  color={"special"}
                />
              </div>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
}
