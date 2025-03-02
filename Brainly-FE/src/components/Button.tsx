import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "lg" | "md";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onclick: () => void;
}

const variantStyle = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const sizeStyles = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-md",
  lg: "py-4 px-6 text-lg",
};

const defaultStyles = "rounded-md px-4 py-2 font-light flex items-center";

export const Button = (props: ButtonProps) => {
  return (
    <button
    onClick={props.onclick}
      className={`${variantStyle[props.variant]} ${defaultStyles} ${
        sizeStyles[props.size]
      } cursor-pointer`}
    >
      <div className="pr-2">{props.startIcon}</div>
      {props.text}
      <div className="pl-2">{props.endIcon}</div>
    </button>
  );
};
