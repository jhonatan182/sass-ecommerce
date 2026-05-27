import clsx from "clsx";
import { InputHTMLAttributes } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement>;

export function FormInput({ ...props }: FormInputProps) {
  const { className, ...rest } = props;

  return (
    <input
      {...rest}
      className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", className)}
    />
  );
}
