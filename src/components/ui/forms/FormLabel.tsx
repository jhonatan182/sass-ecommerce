import clsx from "clsx";
import { LabelHTMLAttributes } from "react";

type FormLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function FormLabel({ children, ...props }: FormLabelProps) {
  const { className, ...rest } = props;

  return (
    <label {...rest} className={clsx("block", className)}>
      {children}
    </label>
  );
}
