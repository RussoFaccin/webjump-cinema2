import React from "react";
import { Props } from "./types";
import { BaseButton } from "./styles";

const CircleButton = ({ children, text }: Props) => {
  return (
    <BaseButton>
      {children}
      <span className="srOnly">{text}</span>
    </BaseButton>
  );
};

export default CircleButton;
