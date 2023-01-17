import React from "react";
import Link from "next/link";

interface Props {
  title: string;
  style?: string;
  href: string;
}

const LinkTo = ({ title, style, href }: Props) => {
  return (
      <Link className="hover:bg-transparent" href={href}>
        <span className={`${style}`} >{title}</span>
      </Link>
  );
};

export default LinkTo;
