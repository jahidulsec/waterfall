"use client";

import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useFormStatus } from "react-dom";
import Button from "../buttons/Button";
import SubmitButton from "../buttons/SubmitButton";

export default function ForgetPasswordForm() {
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

      <div className="flex flex-col gap-2">
        <SubmitButton title="Send Reset Link" />

        <Button type="button" variant={"link"}>
          Return to Login
        </Button>
      </div>
    </form>
  );
}

