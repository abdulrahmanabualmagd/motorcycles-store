import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";

import AdminPanelPage from "./pages/adminPanelPager/adminPanelPage";
import UserPanelPage from "./pages/userPanelPage/userPanelPage";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";
import LandingPage from "./pages/landingPage/landingPage";
import NotFoundPage from "./pages/notFoundPage/notFoundPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/admin",
        element: (
            <PrivateRoute>
                <AdminPanelPage />
            </PrivateRoute>
        ),
    },
    {
        path: "/user",
        element: (
            <PrivateRoute>
                <UserPanelPage />
            </PrivateRoute>
        ),
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
]);
