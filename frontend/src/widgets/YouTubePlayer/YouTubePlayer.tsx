interface YouTubePlayerProps {
    videoUrl: string
    className?: string
}

export const YouTubePlayer = ({ videoUrl, className = '' }: YouTubePlayerProps) => {
    const getYouTubeEmbedUrl = (url: string): string => {
        try {
            const urlObj = new URL(url)

            // Handle youtube.com/watch?v=VIDEO_ID
            if (urlObj.hostname.includes('youtube.com')) {
                const videoId = urlObj.searchParams.get('v')
                if (videoId) return `https://www.youtube.com/embed/${videoId}`
            }

            // Handle youtu.be/VIDEO_ID
            if (urlObj.hostname.includes('youtu.be')) {
                const videoId = urlObj.pathname.slice(1)
                if (videoId) return `https://www.youtube.com/embed/${videoId}`
            }

            // Already an embed URL
            if (url.includes('/embed/')) return url

            return url
        } catch {
            return url
        }
    }

    const embedUrl = getYouTubeEmbedUrl(videoUrl)

    return (
        <div className={`image-wrapper video-bg-image-wrapper ${className}`}>
            <iframe
                className="embedly-embed"
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ aspectRatio: '16/9' }}
                scrolling="no"
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}