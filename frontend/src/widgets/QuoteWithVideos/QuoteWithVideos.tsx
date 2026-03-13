import { VideoCircle } from '@/widgets/VideoCircle'
import { useState } from 'react'
import {ABOUT_QUOTE} from "@/shared/config/content";

interface QuoteWithVideosProps {
    variant?: 'about' | 'home'
}

export const QuoteWithVideos = ({variant}: QuoteWithVideosProps) => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null)

    return (
        <section className="section-card-padding">
            <div
                data-w-id={variant === 'about' ? "19870dc9-2082-ec46-dd5a-7e8dd29abf2c" : "f402fcd4-a56b-275f-aeb1-72593824ca6a"}
                className="container-default w-container about-quote-container"
            >
                <VideoCircle
                    id="video1"
                    videoSrc="/assets/webflow/gifs/marat_circle.mp4"
                    borderColor="var(--primary--02)"
                    position="top-left"
                    activeVideo={activeVideo}
                    setActiveVideo={setActiveVideo}
                />

                <VideoCircle
                    id="video2"
                    videoSrc="/assets/webflow/gifs/kamil_circle.mp4"
                    borderColor="#a78bfa"
                    position="top-right"
                    activeVideo={activeVideo}
                    setActiveVideo={setActiveVideo}
                />

                <div className="about-quote-content">
                    <div className="about-quote-text">
                        {ABOUT_QUOTE.quote}
                    </div>
                </div>

                <img
                    className="about-quote-svg-1"
                    src="/assets/webflow/images/pyramid-figure-courselify-x-webflow-template.png"
                    alt="icon"
                />

                <img
                    className="about-quote-svg-2"
                    src="/assets/webflow/images/square-figure-courselify-x-webflow-template.png"
                    alt="icon"
                />

                <img
                    className="about-quote-svg-3"
                    src="/assets/webflow/images/circle-figure-courselify-x-webflow-template.png"
                    alt="icon"
                />
            </div>
        </section>
    )
}