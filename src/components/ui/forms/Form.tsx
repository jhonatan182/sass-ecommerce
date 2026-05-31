import clsx from "clsx";
import { FormHTMLAttributes } from "react";

type FormProps = {
  children: React.ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export function Form({ children, ...props }: FormProps) {
  const { className, ...rest } = props;

  return (
    <form className={clsx("flex flex-col", className)} {...rest}>
      {children}
    </form>
  );
}
