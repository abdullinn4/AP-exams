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

const matchRoute = (pathname: string): string | undefined => {
    if (WEBFLOW_PAGE_IDS[pathname]) {
        return WEBFLOW_PAGE_IDS[pathname]
    }

    for (const [pattern, pageId] of Object.entries(WEBFLOW_PAGE_IDS)) {
        const regex = new RegExp('^' + pattern.replace(/:[^/]+/g, '[^/]+') + '$')
        if (regex.test(pathname)) {
            return pageId
        }
    }

    return undefined
}

export const useWebflowAnimations = () => {
    const location = useLocation()

    useEffect(() => {
        if (!window.Webflow) return

        const pageId = matchRoute(location.pathname)

        if (!pageId) return

        document.documentElement.setAttribute('data-wf-page', pageId)
        document.documentElement.setAttribute('data-wf-site', '696cb73866e9acecad098e11')

        const ix2 = window.Webflow.require('ix2')

        window.Webflow.destroy()

        if (ix2?.clear) {
            ix2.clear()
        }

        window.Webflow.ready()

        setTimeout(() => {
            ix2.init()
            window.dispatchEvent(new Event('resize'))
        }, 100)

    }, [location.pathname])
}