import { motion } from "framer-motion";
import SearchIcon from "../Icons/SearchIcon";

interface Props {
  searchPlaceholder: string;
  sticky?: boolean;
  onchange?: (e: any) => void;
  style?: string;
  searchHistory?: string;
}

export default function SectionSearch({
  searchPlaceholder,
  sticky,
  onchange,
  style,
  searchHistory,
}: Props) {
  return (
    <motion.div className={`rounded-xl bg-white p-4 ${style}`}>
      <div className="flex items-center rounded-full bg-primary-yellow pt-2 pb-2 pl-4 pr-4">
        <input
          className="w-full bg-transparent p-1 placeholder-black focus:outline-none"
          type={"search"}
          placeholder={searchPlaceholder}
          onChange={onchange}
          value={searchHistory}
        />
        <SearchIcon />
      </div>
    </motion.div>
  );
}
