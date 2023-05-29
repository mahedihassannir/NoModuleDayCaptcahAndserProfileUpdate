import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Register from "../Login/Register";
import Login from "../Login/Login";
import CartPage from "../Pages/CartPage";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
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
                    element: <CartPage></CartPage>
                },

            ]
        }
    ]
)


export default router