import { useAuth } from "@/features/auth/model/useAuth.ts"
import { useEffect, useState } from "react"
import { useGetSystemNotificationsQuery } from "@/shared/api/notificationsApi.ts"
import { Link } from "react-router-dom"
import { GUEST_NOTIFICATION } from "@/shared/config/content"
import { useDispatch, useSelector } from "react-redux"
import { dismissNotification } from "@/features/notifications/model/notificationsSlice"
import type { RootState } from "@/app/store/store"

export const NotificationBadge = () => {
    const { isAuthenticated } = useAuth()
    const dispatch = useDispatch()
    const dismissedIds = useSelector((state: RootState) => state.notifications.dismissedIds)

    const [isActive, setIsActive] = useState(false)

    // Для залогиненных - запрос к API
    const { data: systemNotifications = [] } = useGetSystemNotificationsQuery(undefined, {
        skip: !isAuthenticated,
    })

    // Фильтруем только не закрытые уведомления
    const activeNotifications = isAuthenticated
        ? systemNotifications.filter(n => !dismissedIds.includes(n.id))
        : [GUEST_NOTIFICATION]

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (activeNotifications.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % activeNotifications.length)
            }, 8000)
            return () => clearInterval(interval)
        }
    }, [activeNotifications.length])

    const notification = activeNotifications[currentIndex]

    useEffect(() => {
        if (notification) {
            const timeout = setTimeout(() => setIsActive(true), 500)
            return () => clearTimeout(timeout)
        }
    }, [notification])

    const handleClose = () => {
        setIsActive(false)
        setTimeout(() => {
            if (notification?.id) {
                dispatch(dismissNotification(notification.id))
            }
        }, 800)
    }

    // Не показываем если нет уведомлений
    if (!notification || activeNotifications.length === 0) {
        return null
    }

    return (
        <>
            <div data-w-id="f034c3f5-245e-c95e-1233-a4681f61b364" className="brix-badges-wrapper">
                <div
                    className="more-templates-lottie-2"
                    data-w-id="f034c3f5-245e-c95e-1233-a4681f61b365"
                />

                <Link
                    to={notification.actionUrl || '#'}
                    onClick={(e) => {
                        if (!notification.actionUrl || notification.actionUrl === '#') {
                            e.preventDefault()
                        }
                    }}
                    className={`more-templates-badge-wrapper w-inline-block ${isActive ? 'active' : ''}`}
                >
                    <div>
                        <p className="more-templates-p">
                            {notification.title}{' '}
                            <span className="more-webflow-templates-sub">
                                {notification.message}
                            </span>
                        </p>
                    </div>

                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            handleClose()
                        }}
                        style={{
                            position: 'absolute',
                            top: '8px',
                            right: '8px',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '4px',
                            fontSize: '18px',
                            lineHeight: 1,
                            color: '#6e7191',
                            transition: 'color 0.2s',
                            zIndex: 10,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#0a0913'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#6e7191'
                        }}
                        aria-label="Close notification"
                    >
                        ✕
                    </button>
                </Link>
            </div>

            <style>{`
                .more-templates-badge-wrapper {
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    opacity: 0;
                    transform: translateY(11px) scale(0.9);
                }
                .more-templates-badge-wrapper.active {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                    z-index: 9991;
                }
                .more-templates-badge-wrapper.active:hover {
                    transform: translateY(-3px) scale(1.02) translateX(-3px) rotate(1deg);
                }
            `}</style>
        </>
    )
}