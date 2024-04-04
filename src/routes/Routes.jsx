import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import NewsHome from "../pages/Home/NewsHome";
import Login from "../pages/Login/Login";
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
            {
                path: "/login",
                element: <Login></Login>,
            },
        ]
    },
]);

export default router;