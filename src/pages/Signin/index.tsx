import { FormEventHandler } from "react";
import { Button } from "../../components/Button";
import { Input, InputPassword } from "../../components/Input";
import AuthWrapper from "../../container/Auth";
import { useSignin } from "../../api";

const Signin = () => {
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const target = e.currentTarget;

    const payload = {
      email: (target[0] as HTMLInputElement).value,
      password: (target[1] as HTMLInputElement).value,
    };

    useSignin(payload);
    // console.log(response);
  };
  return (
    <AuthWrapper name="Signin">
      <form className="flex flex-col justify-center gap-4" onSubmit={onSubmit}>
        <Input
          type="email"
          name="Email"
          id="email"
          className="border-0 outline-0 w-full"
          required
        />
        <InputPassword
          className="border-0 outline-0 w-full"
          name="Password"
          id="password"
        />

        <Button name="Signin" className="w-3/4 mx-auto" />
      </form>
    </AuthWrapper>
  );
};

export default Signin;
