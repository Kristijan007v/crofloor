import React, { useState } from "react";
import ButtonDefault from "../Buttons/ButtonDefault";
import Overlay from "../Overlay/Overlay";
import { useTranslation } from "next-i18next";

export default function CookieBanner() {
  const [show, setShow] = useState(true);

  const { t } = useTranslation("cookieBanner");

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
                  onclick={() => setShow(false)}
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
