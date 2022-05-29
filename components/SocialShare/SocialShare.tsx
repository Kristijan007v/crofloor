import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import useLocale from "../../hooks/useLocale";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
import FacebookIcon from "../Icons/FacebookIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import WhatsappIcon from "../Icons/WhatsappIcon";

interface Props {
  text?: string;
  url: string;
  iconSize?: "sm" | "md" | "lg" | "xl";
  style?: string;
  bgColor?: string;
}

export default function SocialShare({
  text,
  url,
  iconSize,
  style,
  bgColor,
}: Props) {
  const locale = useLocale();

  return (
    <div
      className={`flex items-center justify-between space-x-4 ${
        bgColor ? bgColor : "bg-transparent"
      } p-5 ${style}`}
    >
      <p className="font-medium">{text}</p>
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
