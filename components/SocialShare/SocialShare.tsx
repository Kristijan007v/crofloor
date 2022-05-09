import React from "react";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import TwitterIcon from "../Icons/TwitterIcon";
import WhatsappIcon from "../Icons/WhatsappIcon";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

interface Props {
  url: string;
  iconSize?: "sm" | "md" | "lg" | "xl";
}

export default function SocialShare({ url, iconSize }: Props) {
  return (
    <div className="flex items-center justify-between bg-primary-gray p-6">
      <p className="font-medium">Share this article</p>
      <div className="flex space-x-4">
        <FacebookShareButton
          quote="20.456 People have brought the light to UA. Join them."
          hashtag="#ukraine"
          url={url}
        >
          <FacebookIcon size={iconSize} />
        </FacebookShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon size={iconSize} />
        </TwitterShareButton>
        <WhatsappShareButton url={url}>
          <WhatsappIcon size={iconSize} />
        </WhatsappShareButton>
        <CopyToClipboard textToCopy={url} size={iconSize} />
      </div>
    </div>
  );
}
