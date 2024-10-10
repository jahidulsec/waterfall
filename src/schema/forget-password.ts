import { z } from "zod";

export const forgetPasswordSchema = z.object({
    email: z.string({message: 'Enter your email address'}).email({message: 'Enter an valid email address'})
})


export const resetPasswordSchema = z.object({
    email: z.string({message: 'Enter your email address'}).email({message: 'Enter an valid email address'}),
    password: z.string().min(6, 'Your password must contains at least 6 characters'),
    rePassword: z.string().min(6, 'Your password must contains at least 6 characters')
})