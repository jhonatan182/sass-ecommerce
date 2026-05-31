import { SelectHTMLAttributes } from "react";
import clsx from "clsx";

type FormSelectProps = {
  options: { value: string; label: string }[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export function FormSelect({ options, ...props }: FormSelectProps) {
  const { className, ...rest } = props;
  return (
    <select
      className={clsx(`px-5 py-2 border bg-gray-200 rounded mb-5`, className)}
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
