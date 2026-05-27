import { InputHTMLAttributes } from "react";

import clsx from "clsx";

type FormSubmitProps = InputHTMLAttributes<HTMLInputElement>;

export default function FormSubmit({ ...props }: FormSubmitProps) {
  const { className, ...rest } = props;

  return (
    <input type="submit" {...rest} className={clsx("btn-primary", className)} />
  );
}
