import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import NewsHome from "../pages/Home/NewsHome";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";
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
                path: "/news/:id",
                loader: () => fetch('/data/news.json'),
                element:
                    <PrivateRoute>
                        <NewsDetails>
                        </NewsDetails>
                    </PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    },
]);

export default router;