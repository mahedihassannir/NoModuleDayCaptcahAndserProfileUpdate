import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Shared/Nav";

const Main = () => {


    const location = useLocation()
    const NoheaderFooter = location.pathname.includes('Login') || location.pathname.includes('Register')

    return (
        <div>
            {
                NoheaderFooter ||
                <Nav></Nav>

            }
            <Outlet></Outlet>
        </div>
    );
};

export default Main;