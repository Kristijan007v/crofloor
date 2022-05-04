import React from "react";

interface DropdownProps {
  item: string;
}

export default function DropdownItem({ item }: DropdownProps) {
  return (
    <div className="border-b-2 border-black p-2">
      <p>{item}</p>
    </div>
  );
}
