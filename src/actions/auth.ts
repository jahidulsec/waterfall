'use server'

import { loginSchema } from "@/schema/login";
import { redirect } from "next/navigation";

export const login = async (prevState: unknown, formData: FormData) => {
  const result = loginSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return {
      error: result.error.formErrors.fieldErrors,
      success: null,
      toast: null,
    };
  }

  const data = result.data;

  if(data.email != process.env.ADMIN_EMAIL) {
    return { error: null, success: null, toast: `Invalid email address ${process.env.ADMIN_EMAIL}` };
  }

  if(data.password !== process.env.ADMIN_PASSWORD) {
    return { error: null, success: null, toast: 'Invalid password' };
  }

  redirect('/')
};


export const signup = async (prevState: unknown, formData: FormData) => {
  const result = loginSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return {
      error: result.error.formErrors.fieldErrors,
      success: null,
      toast: null,
    };
  }

  const data = result.data;

  redirect('/create-profile')
};

