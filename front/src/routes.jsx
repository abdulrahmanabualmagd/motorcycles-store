import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";

import AdminPanelPage from "./pages/adminPanelPage";
import UserPanelPage from "./pages/userPanelPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import LandingPage from "./pages/landingPage";
import NotFoundPage from "./pages/notFoundPage";

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
