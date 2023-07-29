import React from "react";

import * as S from './styles'

import "./Button.css";

export interface ButtonProps extends React.ComponentProps<"button"> {
 kind?: "primary" | "secondary";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
 ({ kind = "primary", ...props }, ref) => {
    return <S.Wrapper data-button={`kind:${kind}`} ref={ref} {...props} />;
 },
);
