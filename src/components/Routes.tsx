import { createBrowserRouter } from "react-router-dom";
import Auth from "./auth/Auth.component";
import SignUp from "./auth/Signup.component";
import Login from "./auth/Login.component";

const router = createBrowserRouter([
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element: <SignUp/>

    }
]);

export default router;