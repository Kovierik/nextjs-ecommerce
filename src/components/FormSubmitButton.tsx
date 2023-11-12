"use client";

import React, { ComponentProps } from "react";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const FormSubmitButton = ({ children, className }: FormSubmitButtonProps) => {
  return <button className={className}>{children}</button>;
};

export default FormSubmitButton;
