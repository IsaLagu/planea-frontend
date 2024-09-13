import { forwardRef } from "react";

export const Input = forwardRef(({ type = "text", id, className, placeholder, ...rest }, ref) => {
  return (
    <input
      type={type}
      id={id}
      ref={ref}
      className={`shadow-sm bg-gray-50 border border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary focus:border-2 block w-full p-2.5${
        className ? " " + className : ""
      }`}
      placeholder={placeholder}
      {...rest}
    />
  );
});
