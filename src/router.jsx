import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import RelationFunc from "./components/RelationFunc";
import Faq from "./components/Faq";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:"/flashcard",
                element: <RelationFunc />
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/faq",
                element:<Faq/>
            }
        ]
    }
])


export default router 