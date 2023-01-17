import React from "react";

interface Props {
  title: string;
  style: string;
  action?: () => void;
}

const Button = ({ title, style, action }: Props) => {
  return (
    <button onClick={action} className={style}>
      {title}
    </button>
  );
};

export default Button;
