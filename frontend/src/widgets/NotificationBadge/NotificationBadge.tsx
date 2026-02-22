import {useAuth} from "@/features/auth/model/useAuth.ts";
import {useEffect, useState} from "react";
import {useGetSystemNotificationsQuery} from "@/shared/api/notificationsApi.ts";
import {Link} from "react-router-dom";
import {GUEST_NOTIFICATION} from "@/shared/config/content";

export const NotificationBadge = () => {
    const { isAuthenticated } = useAuth()
    const [isClosed, setIsClosed] = useState(() => {
        const closedNotifications = localStorage.getItem('closedNotifications')
        if (!closedNotifications) return false

        try {
            const closed = JSON.parse(closedNotifications)
            const today = new Date().toDateString()
            return closed.date === today
        } catch {
            return false
        }
    })

    const [isActive, setIsActive] = useState(false)

    // Для залогиненных - запрос к API
    const { data: systemNotifications = [] } = useGetSystemNotificationsQuery(undefined, {
        skip: !isAuthenticated,
    })

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (systemNotifications.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % systemNotifications.length)
            }, 8000)
            return () => clearInterval(interval)
        }
    }, [systemNotifications.length])

    // Определяем какое уведомление показывать
    const notification = systemNotifications[currentIndex] || GUEST_NOTIFICATION

    useEffect(() => {
        if (!isClosed && notification) {
            // Задержка перед показом (как в оригинале)
            const timeout = setTimeout(() => setIsActive(true), 500)
            return () => clearTimeout(timeout)
        }
    }, [isClosed, notification])

    const handleClose = () => {
        setIsActive(false)
        setTimeout(() => {
            setIsClosed(true)
            localStorage.setItem('closedNotifications', JSON.stringify({
                date: new Date().toDateString()
            }))
        }, 800) // Время для анимации закрытия
    }

    // Не показываем если закрыто или нет уведомления
    if (isClosed || !notification) {
        return null
    }

    return (
        <>
            <div data-w-id="f034c3f5-245e-c95e-1233-a4681f61b364" className="brix-badges-wrapper">
                {/* Красный кружочек - Lottie анимация */}
                <div
                    className="more-templates-lottie-2"
                    data-w-id="f034c3f5-245e-c95e-1233-a4681f61b365"
                />

                {/* Карточка уведомления */}
                <Link
                    to={notification.actionUrl}
                    className={`more-templates-badge-wrapper w-inline-block ${isActive ? 'active' : ''}`}
                >
                    {/* Убираем логотип, так как его нет в проекте */}
                    <div>
                        <p className="more-templates-p">
                            {notification.title}{' '}
                            <span className="more-webflow-templates-sub">
                                {notification.message}
                            </span>
                        </p>
                    </div>

                    {/* Кнопка закрытия */}
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

            {/* Стили из оригинального HTML */}
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