import { useEffect } from 'react'
import {useLocation} from "react-router-dom";
import {WEBFLOW_PAGE_IDS} from "@/shared/lib/hooks/webflowPages.ts";

declare global {
    interface Window {
        Webflow?: {
            destroy: () => void
            ready: () => void
            require: (module: string) => any
        }
    }
}

export const useWebflowAnimations = () => {
    const location = useLocation()

    useEffect(() => {
        if (!window.Webflow) return

        const pageId = WEBFLOW_PAGE_IDS[location.pathname]

        // ВАЖНО: если нет pageId — НЕ инициализируем ix2
        if (!pageId) return

        document.documentElement.setAttribute('data-wf-page', pageId)

        const ix2 = window.Webflow.require('ix2')

        window.Webflow.destroy()

        // безопасный сброс состояний
        if (ix2?.clear) {
            ix2.clear()
        }

        window.Webflow.ready()
        ix2.init()

        // Webflow любит resize после init
        window.dispatchEvent(new Event('resize'))

    }, [location.pathname])
}
