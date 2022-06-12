import React from "react";
import InfoIcon from "../Icons/InfoIcon";
import LocationIcon from "../Icons/LocationIcon";

interface Props {
  onclick?: () => void;
  text: string;
  icon?: "location" | "info";
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
      {icon === "info" && <InfoIcon />}
      <p>{text}</p>
    </div>
  );
}
