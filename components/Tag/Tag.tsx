import React from "react";
import LocationIcon from "../Icons/LocationIcon";

interface Props {
  onclick?: () => void;
  text: string;
  icon?: "location";
  style?: string;
}

export default function Tag({ onclick, text, icon, style }: Props) {
  return (
    <div
      className={`rounded-full bg-primary-bg pt-2 pb-2 pr-6 pl-6 font-semibold ${
        icon === "location" &&
        "flex items-center space-x-2 hover:cursor-pointer"
      }`}
      onClick={onclick}
    >
      {icon === "location" && <LocationIcon />}
      <p>{text}</p>
    </div>
  );
}
