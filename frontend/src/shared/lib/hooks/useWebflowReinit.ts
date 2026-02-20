import {useEffect} from "react";

export const useWebflowReinit = (data: any) => {
    useEffect(() => {
        if (!data || (Array.isArray(data) && data.length === 0) || !window.Webflow) {
            return
        }

        // Tabs
        window.Webflow.require('tabs')?.redraw()

        // Interactions
        const ix2 = window.Webflow.require('ix2')
        if (ix2) {
            ix2.destroy()
            ix2.init()
        }

        // Принудительный refresh viewport
        requestAnimationFrame(() => {
            window.dispatchEvent(new Event('resize'))
        })
    }, [data])
}