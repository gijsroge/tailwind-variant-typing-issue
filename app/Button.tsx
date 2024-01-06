import React from "react";
import { tv, VariantProps } from "tailwind-variants";

export const buttonStyles = tv({
    base: ['rounded']
});

type ButtonVariantProps = VariantProps<typeof buttonStyles>;

const Button = (props: ButtonVariantProps) => {
  return <button>hoi</button>;
};

export default Button;
