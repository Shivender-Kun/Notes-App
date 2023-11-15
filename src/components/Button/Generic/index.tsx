import { IGenericButton } from "../../../types";

const GenericButton = (props: IGenericButton) => {
  const { name, className } = props;
  return (
    <button
      className={`min-w-fit p-2 bg-blue-500 rounded-sm text-white ${className}`}
    >
      {name}
    </button>
  );
};

export default GenericButton;
