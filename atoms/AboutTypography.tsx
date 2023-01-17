import React from "react";

interface Props {
  normalText: string;
  boldText: string;
  style?: string
}

const AboutTypography = ({ boldText, normalText, style }: Props) => {
  return (
      <p className={style} >
        <span className="font-semibold">{boldText}</span> {normalText}
      </p>
  );
};

export default AboutTypography;
