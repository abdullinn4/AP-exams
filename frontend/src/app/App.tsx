import '@/assets/webflow/css/normalize.css'
import '@/assets/webflow/css/webflow.css'
import '@/assets/webflow/css/smash-ap.webflow.css'
import {Provider} from "react-redux";
import {store} from "@/app/store/store.ts";
import {AppRouter} from "@/app/router/AppRouter.tsx";
import {BrowserRouter} from "react-router-dom";
import {useEffect} from "react";
import {NotificationBadge} from "@/widgets/NotificationBadge";

function App() {

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }
    }, [])

    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter/>
                <NotificationBadge/>
            </BrowserRouter>
        </Provider>
    )
}

export default App
