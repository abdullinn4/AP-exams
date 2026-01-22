import '@/assets/webflow/css/normalize.css'
import '@/assets/webflow/css/webflow.css'
import '@/assets/webflow/css/smash-ap.webflow.css'
import {Provider} from "react-redux";
import {store} from "@/app/store/store.ts";
import {AppRouter} from "@/app/router/AppRouter.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>

        </Provider>
    )
}

export default App
