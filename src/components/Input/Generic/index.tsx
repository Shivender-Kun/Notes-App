import { IGenericInput } from "../../../types";

const GenericInput = (props: IGenericInput) => {
  const { name } = props;
  return (
    <div className="flex flex-col gap-1">
      <div>
        <label htmlFor={name}>{name}</label>
      </div>
      <div className="bg-white p-2 rounded-md">
        <input {...props} />
      </div>
    </div>
  );
};

export default GenericInput;
