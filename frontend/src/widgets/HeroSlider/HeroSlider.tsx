import { useEffect, useRef } from 'react'
import {SLIDER_VIDEOS_BOTTOM, SLIDER_VIDEOS_TOP} from "@/shared/config/content";


export const HeroSlider = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const topRowRef = useRef<HTMLDivElement>(null)
    const bottomRowRef = useRef<HTMLDivElement>(null)
    const scrollOffsetRef = useRef(0)

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const scrollDelta = currentScrollY - lastScrollY

            // Накапливаем смещение на основе скролла (сильно замедлено)
            scrollOffsetRef.current += scrollDelta * 0.003

            if (topRowRef.current) {
                // Верхний ряд: скролл вниз → движение влево (отрицательное значение)
                const translateX = -scrollOffsetRef.current
                topRowRef.current.style.transform = `translate3d(${translateX}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
            }

            if (bottomRowRef.current) {
                // Нижний ряд: скролл вниз → движение вправо (положительное значение)
                const translateX = scrollOffsetRef.current
                bottomRowRef.current.style.transform = `translate3d(${translateX}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
            }

            lastScrollY = currentScrollY
        }

        // Анимация появления контейнера (fade in)
        if (containerRef.current) {
            setTimeout(() => {
                if (containerRef.current) {
                    containerRef.current.style.opacity = '1'
                }
            }, 100)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div
            ref={containerRef}
            data-w-id="17853450-f9d9-10f6-6823-db17f2eaead3"
            style={{ opacity: 0, transition: 'opacity 0.6s ease' }}
            className="sales-home---pages-container"
        >
            <div
                ref={topRowRef}
                className="sales-home---pages-row top"
                style={{
                    willChange: 'transform',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.3s ease-out' // ✅ Увеличено с 0.1s до 0.3s
                }}
            >
                {SLIDER_VIDEOS_TOP.map((video, idx) => (
                    <div key={idx} className="sales-home---hero-link-wrapper w-inline-block">
                        <video
                            src={video.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </div>
            <div
                ref={bottomRowRef}
                className="sales-home---pages-row bottom"
                style={{
                    willChange: 'transform',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.3s ease-out'
                }}
            >
                {SLIDER_VIDEOS_BOTTOM.map((video, idx) => (
                    <div key={idx} className="sales-home---hero-link-wrapper w-inline-block">
                        <video
                            src={video.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </div>
            <div className="blur-bg bg-hero-sales"></div>
        </div>
    )
}