import AuthProvider from "./context/authContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import HeaderComponent from "./components/header/headerComponent";
import FooterComponent from "./components/footer/footerComponent";
export default function App() {
    return (
        <>
            <AuthProvider>
                <HeaderComponent />
                <RouterProvider router={router} />
                <FooterComponent />
            </AuthProvider>
        </>
    );
}
