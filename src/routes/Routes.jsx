import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import NewsHome from "../pages/Home/NewsHome";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                children: [
                    {
                        path: "/category/:id",
                        loader: () => fetch('/data/news.json'),
                        element: <NewsHome></NewsHome>
                    },
                ]
            },
        ]
    },
]);

export default router;