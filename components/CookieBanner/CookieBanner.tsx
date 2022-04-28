import React, { useState } from "react";
import ButtonDefault from "../Buttons/ButtonDefault";
import Overlay from "../Overlay/Overlay";

export default function CookieBanner() {
  const [show, setShow] = useState(true);

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
              <p className="text-center text-xl font-semibold">
                This website uses cookies
              </p>
              <p className="text-left">
                We use cookies to ensure that we give you the best experience on
                our website. If you continue to use this site we will assume
                that you are happy with it.
              </p>
              <div className="flex flex-col space-y-2">
                <ButtonDefault
                  text="Fine by me, I accept"
                  ariaLabel="Accept cookies"
                  onclick={() => setShow(false)}
                />
                <ButtonDefault
                  text="Settings"
                  ariaLabel="Go to cookie settings"
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
