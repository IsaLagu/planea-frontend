export const Input = ({ type = "text", id, className, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      className={`shadow-sm bg-gray-50 border border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary block w-full p-2.5${
        className ? " " + className : ""
      }`}
      placeholder={placeholder}
    />
  );
};
