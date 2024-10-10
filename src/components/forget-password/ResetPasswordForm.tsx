"use client";

import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import PasswordInput from "../inputs/PasswordInput";
import { useFormStatus } from "react-dom";
import Button from "../buttons/Button";
import SubmitButton from "../buttons/SubmitButton";

export default function ResetPasswordForm() {
  return (
    <form className="flex flex-col gap-5 my-2">
      <p>
        <Label htmlFor="email">Email address</Label>
        <Input
          className="mt-2"
          type="text"
          name="email"
          id="email"
          placeholder="name@company.com"
        />
        {/* {data?.error?.email && <p className="error-msg">{data.error.email}</p>} */}
      </p>

      <PasswordInput label="Enter password">
        {/* {data?.error?.password && <p className="error-msg">{data.error.password}</p>} */}
      </PasswordInput>

      <PasswordInput label="Confirm your password">
        {/* {data?.error?.password && <p className="error-msg">{data.error.password}</p>} */}
      </PasswordInput>

        <SubmitButton title="Save" />
    </form>
  );
}


