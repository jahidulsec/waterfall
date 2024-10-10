"use client";

import { toast } from "sonner";
import PasswordInput from "../inputs/PasswordInput";
import Link from "next/link";
import SubmitButton from "../buttons/SubmitButton";
import Input from "../inputs/Input";
import { useFormState } from "react-dom";
import { login } from "@/actions/auth";
import { useEffect } from "react";

const LoginForm = () => {
  const [data, action] = useFormState(login, null);

  useEffect(() => {
    if (data?.toast != null) {
      toast.error(data.toast);
    }
    console.log(data?.toast);
  }, [data]);

  return (
    <>
      {/* form */}
      <form action={action} className="flex flex-col gap-5 my-8">
        <Input
          label="Email address"
          type="email"
          id="email"
          name="email"
          placeholder="name@company.com"
        >
          {data?.error?.email && (
            <p className="error-msg">{data.error.email}</p>
          )}
        </Input>

        <PasswordInput name="password" id="password">
          {data?.error?.password && (
            <p className="error-msg">{data.error.password}</p>
          )}
        </PasswordInput>

        <Link
          href={"/forget-password"}
          className="text-sm text-muted-foreground text-right -mt-2 self-end hover:text-primary"
        >
          Forget password?
        </Link>

        <SubmitButton title="Login" />
      </form>
    </>
  );
};

export default LoginForm;
