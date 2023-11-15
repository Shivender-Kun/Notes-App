import { IComponentWrapper } from "../../types";

const AuthWrapper = ({ children }: IComponentWrapper) => {
  return <div className="flex-1">{children}</div>;
};

export default AuthWrapper;
