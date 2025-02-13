interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "ls" | "md";
  text: string;
  startIcon?: any;
  endIcon?: any;
  onclick: () => void;
}

export const Button = (props: ButtonProps) => {
    return <button>

    </button>
};
