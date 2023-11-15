import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { InputPasswordProps } from "../../../types";

const InputPassword = ({ name, id, ...props }: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <div>
        <label htmlFor="Password">{name}</label>
      </div>
      <div className="flex flex-row bg-white rounded-md p-2 gap-2">
        <input
          type={showPassword ? "text" : "password"}
          {...{ name, id }}
          {...props}
        />
        <div
          onClick={() => setShowPassword((prev) => !prev)}
          className="flex justify-center items-center"
        >
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </div>
      </div>
    </div>
  );
};

export default InputPassword;
