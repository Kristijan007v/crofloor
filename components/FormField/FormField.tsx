import React from "react";

interface Props {
  label: string;
  htmlFor: string;
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

export default function FormField({ label, htmlFor, type, name, id }: Props) {
  return (
    <div className="flex flex-col space-y-2 p-4">
      <label className="label__default" htmlFor={htmlFor}>
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
          cols={30}
          rows={10}
        ></textarea>
      )}
    </div>
  );
}
