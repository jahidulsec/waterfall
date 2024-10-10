import {z} from 'zod';

export const loginSchema = z.object({
    email: z.string().email({message: 'Enter your email address'}),
    password: z.string().min(6, 'Your password must contains at least 6 characters')
})