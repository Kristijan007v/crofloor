import { IconContext } from "react-icons";
import { MdContentCopy } from "react-icons/md";

interface Props {
  onclick?: () => void;
  style?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function ClipboardIcon({ onclick, style, size }: Props) {
  return (
    <IconContext.Provider
      value={{
        className: `${style} ${
          size === "sm"
            ? "text-xl"
            : size === "md"
            ? "text-2xl"
            : size === "lg"
            ? "text-3xl"
            : "text-4xl"
        }`,
      }}
    >
      <MdContentCopy onClick={onclick} />
    </IconContext.Provider>
  );
}
