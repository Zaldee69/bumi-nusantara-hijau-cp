import React from "react";

interface Props {
  Icon: JSX.Element;
  title: string;
  subtitle: string;
  style?: string
}

const Advantage = ({ Icon, title, subtitle, style }: Props) => {
  return (
    <div className={`flex items-start gap-5 ${style}`}>
      <span>{Icon}</span>
      <div>
        <p className="font-bold" >{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Advantage;
