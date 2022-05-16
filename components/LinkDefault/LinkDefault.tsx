import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  text: string;
  href: string;
  style?: string;
  props?: any;
}

export default function LinkDefault({ text, href, style, props }: Props) {
  const router = useRouter();
  return (
    <Link href={`${href}`} locale={router.locale}>
      <a className={`${style}`} {...props}>
        {text}
      </a>
    </Link>
  );
}
