import { useEffect } from "react"
import { useLocation, useNavigationType } from "react-router-dom"

export const ScrollManager = () => {
    const location = useLocation()
    const navigationType = useNavigationType()

    useEffect(() => {
        if (navigationType === 'POP') {
            // Назад / вперёд → браузер сам восстановит
            return
        }

        // PUSH или REPLACE → скроллим вверх
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [location.pathname, navigationType])

    return null
}
