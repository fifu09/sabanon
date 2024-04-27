export const ButtonNav = (props) => {
  return (
    <button
      className="text-xl h-16 border border-gray-600 flex w-full justify-center items-center hover:bg-gray-600"
      onClick={() => {
        props.onClick(props.text);
      }}
    >
      {props.text}
    </button>
  );
};

