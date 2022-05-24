import React, { useId } from "react";

interface Props {
  label: string;
  htmlFor?: string;
  type:
    | "text"
    | "textarea"
    | "email"
    | "password"
    | "checkbox"
    | "radio"
    | "number";
  name?: string;
  id?: string;
  required?: false;
  onChange?: (e: any) => void;
}

export default function FormField({
  label,
  htmlFor,
  type,
  name,
  id,
  onChange,
}: Props) {
  const uniqueID = useId();

  return (
    <div className="flex flex-col space-y-2 p-4">
      <label className="label__default" htmlFor={uniqueID}>
        {label}
      </label>
      {type === "text" ? (
        <input
          className="input__default"
          type={type}
          name={uniqueID}
          id={uniqueID}
          onChange={onChange}
          required
        />
      ) : (
        <textarea
          className="input__textarea"
          name={uniqueID}
          id={uniqueID}
          required
          cols={30}
          rows={10}
          onChange={onChange}
        ></textarea>
      )}
    </div>
  );
}
