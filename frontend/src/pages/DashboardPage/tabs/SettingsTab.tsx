import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const passwordSchema = z.object({
    currentPassword: z.string().min(1, 'Current password is required'),
    newPassword: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string()
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
})

type PasswordFormData = z.infer<typeof passwordSchema>

export const SettingsTab = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<PasswordFormData>({
        resolver: zodResolver(passwordSchema)
    })

    const onSubmit = async (data: PasswordFormData) => {
        try {
            setError(null)
            setSuccess(false)

            // TODO: Implement API call
            console.log('Change password:', data)

            await new Promise(resolve => setTimeout(resolve, 1000))

            setSuccess(true)
            reset()
        } catch (err: any) {
            setError(err.message || 'Failed to change password')
        }
    }

    return (
        <div
        >
            <div>
                <div className="card" style={{ padding: '32px' }}>
                    <h2 style={{ marginBottom: '8px' }}>Account Settings</h2>
                    <p style={{ color: 'var(--neutral--600)', marginBottom: '32px' }}>
                        Manage your account preferences and security
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div style={{ marginBottom: '24px' }}>
                            <label className="text-200 text-weight-semibold" style={{ display: 'block', marginBottom: '8px' }}>
                                Current Password
                            </label>
                            <input
                                type="password"
                                {...register('currentPassword')}
                                className="input w-input"
                                placeholder="Enter current password"
                            />
                            {errors.currentPassword && (
                                <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
                                    {errors.currentPassword.message}
                                </p>
                            )}
                        </div>

                        <div style={{ marginBottom: '24px' }}>
                            <label className="text-200 text-weight-semibold" style={{ display: 'block', marginBottom: '8px' }}>
                                New Password
                            </label>
                            <input
                                type="password"
                                {...register('newPassword')}
                                className="input w-input"
                                placeholder="Enter new password"
                            />
                            {errors.newPassword && (
                                <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
                                    {errors.newPassword.message}
                                </p>
                            )}
                        </div>

                        <div style={{ marginBottom: '32px' }}>
                            <label className="text-200 text-weight-semibold" style={{ display: 'block', marginBottom: '8px' }}>
                                Confirm New Password
                            </label>
                            <input
                                type="password"
                                {...register('confirmPassword')}
                                className="input w-input"
                                placeholder="Confirm new password"
                            />
                            {errors.confirmPassword && (
                                <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

                        {success && (
                            <div style={{
                                padding: '12px',
                                backgroundColor: '#f0fdf4',
                                border: '1px solid #86efac',
                                borderRadius: '8px',
                                marginBottom: '16px'
                            }}>
                                <p style={{ color: '#166534', margin: 0 }}>
                                    ✓ Password changed successfully!
                                </p>
                            </div>
                        )}

                        {error && (
                            <div style={{
                                padding: '12px',
                                backgroundColor: '#fef2f2',
                                border: '1px solid #fca5a5',
                                borderRadius: '8px',
                                marginBottom: '16px'
                            }}>
                                <p style={{ color: '#991b1b', margin: 0 }}>
                                    {error}
                                </p>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="button-primary w-button"
                            disabled={isSubmitting}
                            style={{ width: '100%' }}
                        >
                            {isSubmitting ? 'Changing Password...' : 'Change Password'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}