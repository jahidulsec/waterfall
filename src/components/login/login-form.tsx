"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";
import Spinner from "../ui/spinner";
import PasswordInput from "../inputs/PasswordInput";
import Button from "../buttons/Button";
import Link from "next/link";
// import { adminLogin } from '@/app/actions/auth';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  //   const [data, action] = useFormState(adminLogin, null);

  //   useEffect(() => {
  //     if (data?.db != null) {
  //       toast.error(data.db);
  //     }
  //   });

  return (
    <>
      {/* form */}
      <form action={""} className="flex flex-col gap-5 my-8">
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

        <PasswordInput>
          {/* {data?.error?.password && <p className="error-msg">{data.error.password}</p>} */}
        </PasswordInput>

        <Link
          href={""}
          className="text-sm text-muted-foreground text-right -mt-2"
        >
          Forget password?
        </Link>

        <SubmitButton />
      </form>
    </>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} isLoading={pending}>
      Login
    </Button>
  );
};

export default LoginForm;
