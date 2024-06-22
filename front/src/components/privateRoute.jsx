/*
    - This component checks for user authentication before accessing the private pages(user must be authenticated[Registered]) 
        - Gets the authToken provided by the AuthContext
        - Allow access to children as long as the authToken is not null
*/

import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import LoginPage from "../pages/loginPage";

export default function PrivateRoute({ children }) {
    // Get authToken
    const { authToken } = useContext(AuthContext);
    // Check for user authentication, navigate to login page if the user is not logged in 

    return authToken ? children : <LoginPage />;
}
