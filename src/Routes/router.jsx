import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Register from "../Login/Register";
import Login from "../Login/Login";
import CartPage from "../Pages/CartPage";
import PrivateRoute from "../Private/PrivateRoute";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <PrivateRoute><Home></Home></PrivateRoute>
                },

                {
                    path: 'Register',
                    element: <Register></Register>
                },
                {
                    path: 'Login',
                    element: <Login></Login>
                },
                {
                    path: 'CardPage',
                    element: <PrivateRoute><CartPage></CartPage></PrivateRoute>
                },

            ]
        }
    ]
)


export default router