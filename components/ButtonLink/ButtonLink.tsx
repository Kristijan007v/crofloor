import React from "react";

interface Props {
  children: React.ReactNode;
  style?: string;
  href: string;
  newTab?: boolean;
}

export default function ButtonLink({ children, style, href, newTab }: Props) {
  const visitLink = () => {
    {
      newTab ? window.open(href, "_blank") : (window.location.href = `${href}`);
    }
  };
  return (
    <button className={`${style}`} onClick={visitLink}>
      {children}
    </button>
  );
}
