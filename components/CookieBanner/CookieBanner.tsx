import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useCookieStore } from "../../store/app/cookie.module";
import ButtonDefault from "../Buttons/ButtonDefault";
import OverlayNew from "../OverlayNew/OverlayNew";

export default function CookieBanner() {
  const { t } = useTranslation("cookieBanner");

  const [show, setShow] = useState(true);
  const cookieStore = useCookieStore();
  const { showCookie, setCookie } = cookieStore;

  useEffect(() => {
    setShow(showCookie);
  }, [showCookie]);

  return (
    <>
      {show && (
        <OverlayNew position="center">
          <div className="content flex flex-col content-end justify-end">
            <div className="grow rounded-xl bg-white p-6">
              <div className="flex flex-col space-y-4">
                <div>
                  <p className="text-center text-xl font-semibold">
                    {t("title")}
                  </p>
                  <p className="text-left">{t("description")}</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <ButtonDefault
                    text={t("button-accept")}
                    ariaLabel={t("button-accept")}
                    onclick={() => {
                      setCookie(false);
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
          </div>
        </OverlayNew>
      )}
    </>
  );
}
