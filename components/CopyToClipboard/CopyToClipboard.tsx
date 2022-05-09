import toast from "react-hot-toast";
import useLocale from "../../hooks/useLocale";
import ClipboardIcon from "../Icons/ClipboardIcon";

interface Props {
  textToCopy: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function CopyToClipboard({ textToCopy, size }: Props) {
  const locale = useLocale();

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      toast(
        `${locale == "en" ? "Copied to clipboard" : "Kopirano u međuspremnik"}!`
      );
      return await navigator.clipboard.writeText(text);
    } else {
      toast("Copied to clipboard");
      return document.execCommand("copy", true, text);
    }
  }
  return (
    <>
      <ClipboardIcon
        onclick={() => copyTextToClipboard(textToCopy)}
        size={size}
      />
    </>
  );
}
