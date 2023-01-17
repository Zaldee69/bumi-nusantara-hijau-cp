import React from "react";
import Advantage from "./Advantage";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  Icon: JSX.Element;
  title: string;
  subtitle: string;
  style?: string;
}

const ServiceCard = ({ title, subtitle, Icon, style }: Props) => {
  return (
    <div className="max-w-sm px-5 py-10 bg-white rounded-xl relative cursor-pointer hover:shadow-xl shadow">
      <Advantage style="mb-5" Icon={Icon} title={title} subtitle={subtitle} />
      <p className="flex items-center gap-3 ml-[50px] absolute bottom-5 font-medium text-secondary group">
        Lihat selengkapnya{" "}
        <BsArrowRight
          size={20}
          className="group-hover:translate-x-3 duration-100"
        />{" "}
      </p>
    </div>
  );
};

export default ServiceCard;
