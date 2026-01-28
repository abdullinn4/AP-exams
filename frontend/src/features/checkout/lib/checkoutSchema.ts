import { z } from 'zod'

export const checkoutSchema = z.object({
    email: z.string()
        .min(1, 'Email is required')
        .email('Please enter a valid email address'),
    discordNickname: z.string()
        .min(3, 'Discord nickname must be at least 3 characters')
        .max(32, 'Discord nickname must be less than 32 characters'),
})

export type CheckoutFormData = z.infer<typeof checkoutSchema>