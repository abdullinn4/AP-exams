import { useState, useEffect } from 'react'
import { useGetLikesQuery, useToggleLikeMutation } from '@/shared/api/comingSoonApi'
import {getAdjustedLikeCount} from "@/shared/config/content/courseLikesOffset.ts";

interface LikeButtonProps {
    courseSlug: string
}

export const LikeButton = ({ courseSlug }: LikeButtonProps) => {
    const { data: likesData } = useGetLikesQuery(courseSlug)
    const [toggleLike, { isLoading: isToggling }] = useToggleLikeMutation()
    const [isAnimating, setIsAnimating] = useState(false)
    const displayedLikes = getAdjustedLikeCount(courseSlug, likesData?.likesCount || 0)

    const handleLike = async () => {
        if (isToggling) return

        setIsAnimating(true)
        try {
            await toggleLike(courseSlug).unwrap()
        } catch (error) {
            console.error('Failed to toggle like:', error)
        }
    }

    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 600)
            return () => clearTimeout(timer)
        }
    }, [isAnimating])

    const isLiked = likesData?.likedByUser ?? false
    const likesCount = likesData?.likesCount ?? 0

    return (
        <div className="like-button-wrapper">
            <button
                onClick={handleLike}
                disabled={isToggling}
                className={`like-button ${isLiked ? 'liked' : ''} ${isAnimating ? 'animating' : ''}`}
                style={{
                    backgroundColor: isLiked ? 'var(--primary--01)' : 'var(--neutral--100)',
                    color: isLiked ? 'var(--neutral--100)' : 'var(--neutral--800)',
                    border: `2px solid ${isLiked ? 'var(--primary--01)' : 'var(--neutral--400)'}`,
                    borderRadius: '16px',
                    padding: '20px 40px',
                    fontSize: '18px',
                    fontWeight: 600,
                    cursor: isToggling ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.3s ease',
                    transform: isAnimating ? 'scale(1.1)' : 'scale(1)',
                    boxShadow: isLiked
                        ? '0 8px 24px rgba(121, 58, 255, 0.3)'
                        : '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
                onMouseEnter={(e) => {
                    if (!isToggling) {
                        e.currentTarget.style.transform = 'scale(1.05)'
                    }
                }}
                onMouseLeave={(e) => {
                    if (!isToggling && !isAnimating) {
                        e.currentTarget.style.transform = 'scale(1)'
                    }
                }}
            >
                <div
                    className="like-icon"
                    style={{
                        fontSize: '24px',
                        transition: 'transform 0.3s ease',
                        transform: isAnimating ? 'scale(1.3) rotate(15deg)' : 'scale(1) rotate(0deg)',
                    }}
                >
                    <img src={`/assets/webflow/images/${isLiked ? "liked.svg" : "like.svg"}`} alt="like icon"/>
                </div>
                <div className="like-text">
                    {isLiked ? 'Liked' : 'Like this course'}
                </div>
                {likesCount > 0 && (
                    <div
                        className="like-count"
                        style={{
                            backgroundColor: isLiked ? 'rgba(255, 255, 255, 0.2)' : 'var(--neutral--300)',
                            color: isLiked ? 'var(--neutral--100)' : 'var(--neutral--800)',
                            borderRadius: '12px',
                            padding: '4px 12px',
                            fontSize: '16px',
                            fontWeight: 700,
                            minWidth: '40px',
                            textAlign: 'center',
                        }}
                    >
                        {displayedLikes}
                    </div>
                )}
            </button>
        </div>
    )
}