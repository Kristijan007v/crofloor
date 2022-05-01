import React from "react";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";

export default function SocialShare() {
  return (
    <div className="flex items-center justify-between bg-primary-gray p-6">
      <p className="font-medium">Share this article</p>
      <div className="flex space-x-4">
        <FacebookIcon />
        <InstagramIcon />
        <LinkedinIcon />
      </div>
    </div>
  );
}
