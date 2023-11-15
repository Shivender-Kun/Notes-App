import { IAuthWrapper } from "../../types";

const AuthWrapper = ({ children, name }: IAuthWrapper) => {
  return (
    <div className="flex-1 max-w-screen-xl mx-auto flex flex-col justify-center  min-w-fit w-1/2">
      <h2 className="text-center text-2xl mb-5">{name}</h2>
      {children}
    </div>
  );
};

export default AuthWrapper;
