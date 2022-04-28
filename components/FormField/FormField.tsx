import React from "react";

interface Props {
  label: string;
  type:
    | "text"
    | "textarea"
    | "email"
    | "password"
    | "checkbox"
    | "radio"
    | "number";
  name: string;
  id: string;
  required?: false;
}

export default function FormField({ label, type, name, id }: Props) {
  return (
    <div className="flex flex-col space-y-2 p-4">
      <label className="label__default" htmlFor={name}>
        {label}
      </label>
      {type === "text" ? (
        <input
          className="input__default"
          type={type}
          name={name}
          id={id}
          required
        />
      ) : (
        <textarea
          className="input__textarea"
          name={name}
          id={id}
          required
        ></textarea>
      )}
    </div>
  );
}
