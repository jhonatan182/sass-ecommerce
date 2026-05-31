import { InputHTMLAttributes } from "react";

import clsx from "clsx";

type FormSubmitProps = InputHTMLAttributes<HTMLInputElement>;

export function FormSubmit({ ...props }: FormSubmitProps) {
  const { className, disabled, ...rest } = props;

  return (
    <input
      type="submit"
      disabled={disabled}
      {...rest}
      className={clsx(
        "btn-primary",
        disabled ? "cursor-not-allowed" : "",
        className,
      )}
    />
  );
}
