import React from "react";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <p>
        <span className="text-8xl font-extrabold">4</span>
        <span className="text-8xl font-extrabold">0</span>
        <span className="text-8xl font-extrabold">4</span>
      </p>
      <p className="h2">Page not found</p>
      <p className="paragraph">
        It seems you are lost or just misspelled the URL. Click the button
        bellow to find your way home.
      </p>
      <button className="btn__default">Go back to the homepage</button>
    </div>
  );
}
