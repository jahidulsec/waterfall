"use client";

import React, { useEffect } from "react";
import Input from "../inputs/Input";
import PasswordInput from "../inputs/PasswordInput";
import SubmitButton from "../buttons/SubmitButton";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { signup } from "@/actions/auth";

export default function SignUpForm() {
  const [data, action] = useFormState(signup, null);

  useEffect(() => {
    if (data?.toast != null) {
      toast.error(data.toast);
    }
    console.log(data?.toast);
  }, [data]);


  return (
    <form action={action} className="flex flex-col gap-5 my-8">
      <Input
        label="Email address"
        type="email"
        id="email"
        name="email"
        placeholder="name@company.com"
      >
        {data?.error?.email && <p className="error-msg">{data.error.email}</p>}
      </Input>

      <PasswordInput name="password" id="password" label="Password">
        {data?.error?.password && (
          <p className="error-msg">{data.error.password}</p>
        )}
      </PasswordInput>

      <SubmitButton title="Sign up" />
    </form>
  );
}
