import {useEffect, useRef} from 'react'

interface VideoCircleProps {
    id: string
    activeVideo: string | null
    setActiveVideo: (id: string | null) => void
    videoSrc: string
    borderColor: string
    position: 'top-left' | 'top-right'
}

export const VideoCircle = ({
                                id,
                                activeVideo,
                                setActiveVideo,
                                videoSrc,
                                borderColor,
                                position
                            }: VideoCircleProps) => {

    const videoRef = useRef<HTMLVideoElement>(null)

    const isPlaying = activeVideo === id

    const handleClick = () => {
        const video = videoRef.current
        if (!video) return

        if (isPlaying) {
            video.pause()
            setActiveVideo(null)
        } else {
            setActiveVideo(id)
            video.play()
        }
    }

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        if (!isPlaying) {
            video.pause()
        }
    }, [isPlaying])

    return (
        <div
            className={`video-circle-wrapper ${position}`}
            onClick={handleClick}
        >
            <div
                className={`video-circle ${isPlaying ? 'expanded' : ''}`}
                style={{ borderColor }}
            >
                <video
                    ref={videoRef}
                    src={videoSrc}
                    loop
                    playsInline
                    className="video-circle-video"
                />
            </div>

            {!isPlaying && (
                <div className="video-circle-sound">
                    <img
                        src="/assets/webflow/images/play_icon.svg"
                        alt="volume-icon"
                    />
                </div>
            )}
        </div>
    )
}