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
  url: string;
  iconSize?: "sm" | "md" | "lg" | "xl";
}

export default function SocialShare({ url, iconSize }: Props) {
  const locale = useLocale();

  return (
    <div className="flex items-center justify-between bg-primary-gray p-5">
      <p className="font-medium">
        {locale == "en" ? "Share this article" : "Podijeli članak"}
      </p>
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
