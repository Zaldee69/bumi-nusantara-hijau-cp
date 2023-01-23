import React from "react";
import Advantage from "./Advantage";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link"

interface Props {
  Icon: JSX.Element;
  title: string;
  subtitle: string;
  style?: string;
  link: string
}

const ServiceCard = ({ title, subtitle, Icon, style, link}: Props) => {
  return (
    <div className={`${style} max-w-sm px-5 py-10 bg-white rounded-xl relative cursor-pointer hover:shadow-xl shadow`}>
      <Advantage style="mb-5" Icon={Icon} title={title} subtitle={subtitle} />
      <Link href={link ? link : "#"} >
      <p className="flex items-center gap-3 ml-[50px] absolute bottom-5 font-medium text-secondary group">
        Lihat selengkapnya{" "}
        <BsArrowRight
          size={20}
          className="group-hover:translate-x-3 duration-100"
        />{" "}
      </p>
      </Link>
    </div>
  );
};

export default ServiceCard;
