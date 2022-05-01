import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  text: string;
  href: string;
  style?: string;
}

export default function LinkDefault({ text, href, style }: Props) {
  const router = useRouter();
  return (
    <Link href={`${href}`} locale={router.locale}>
      <a className={style}>{text}</a>
    </Link>
  );
}
