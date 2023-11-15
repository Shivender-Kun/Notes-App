import { FormEventHandler, useEffect, useRef } from "react";

import { InputPassword, Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { AuthWrapper } from "../../container";
import { useSignup } from "../../api";

const Signup = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const target = e.currentTarget;

    const payload = {
      name: (target[0] as HTMLInputElement).value,
      email: (target[1] as HTMLInputElement).value,
      password: (target[2] as HTMLInputElement).value,
      confirmPassword: (target[3] as HTMLInputElement).value,
    };

    if (payload.password !== payload.confirmPassword)
      return alert("Password field does not match with Confirm Password!");

    useSignup(payload);
  };

  return (
    <AuthWrapper name="Signup">
      <form
        className="flex flex-col justify-center gap-4"
        ref={formRef}
        onSubmit={onSubmit}
      >
        <Input
          type="text"
          name="Name"
          id="name"
          className="border-0 outline-0 w-full"
          required
        />
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
        <InputPassword
          className="border-0 outline-0 w-full"
          name="Confirm Password"
          id="confirm-password"
        />
        <Button name="Signup" className="w-3/4 mx-auto" />
      </form>
    </AuthWrapper>
  );
};

export default Signup;
