export const Button = ({ onClick, text, className }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`text-white bg-primary hover:bg-lightViolet focus:ring-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center${
        className ? " " + className : ""
      }`}
    >
      {text}
    </button>
  );
};
