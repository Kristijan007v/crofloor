import SearchIcon from "../Icons/SearchIcon";

interface Props {
  searchPlaceholder: string;
  sticky?: boolean;
  onchange?: any;
}

export default function SectionSearch({
  searchPlaceholder,
  sticky,
  onchange,
}: Props) {
  return (
    <div
      className={`${
        sticky && "sticky"
      } top-0 left-0 right-0 z-20 border-b bg-white p-4`}
    >
      <div className="flex items-center rounded-full bg-primary-yellow pt-2 pb-2 pl-4 pr-4">
        <input
          className="w-full bg-transparent p-1 placeholder-black focus:outline-none"
          type={"search"}
          placeholder={searchPlaceholder}
          onChange={onchange}
        />
        <SearchIcon />
      </div>
    </div>
  );
}
