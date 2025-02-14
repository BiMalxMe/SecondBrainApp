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
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
};

const defaultStyles = "rounded-md";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyle[props.variant]} ${defaultStyles} ${
        sizeStyles[props.size]
      }`}
    >
      {props.text}
    </button>
  );
};
