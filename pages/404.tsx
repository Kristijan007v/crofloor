import React from "react";
import ButtonDefault from "../components/Buttons/ButtonDefault";
import Skeleton from "../components/Skeleton/Skeleton";

export default function Custom404() {
  return (
    <div className="m-6 flex h-screen flex-col items-center justify-center space-y-4 text-center">
      <p>
        <span className="text-8xl font-extrabold">4</span>
        <span className="text-8xl font-extrabold text-yellow-special">0</span>
        <span className="text-8xl font-extrabold">4</span>
      </p>
      <p className="h2">Page not found</p>
      <p className="paragraph">
        It seems you are lost or just misspelled the URL. Click the button
        bellow to find your way home.
      </p>
      <ButtonDefault
        text="Go back to the homepage"
        onclick={() => (window.location.href = "/")}
        icon="arrowLeft"
      />
    </div>
  );
}
