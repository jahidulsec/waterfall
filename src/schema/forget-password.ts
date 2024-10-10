import { z } from "zod";

export const forgetPasswordSchema = z.object({
    email: z.string({message: 'Enter your email address'}).email({message: 'Enter an valid email address'})
})