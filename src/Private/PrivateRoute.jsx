import { Navigate, useLocation } from "react-router-dom";
import { contexM } from "../Authentication/AuthProvider";
import { useContext } from "react";
// here is the loader spinner import
import { RotatingLines } from 'react-loader-spinner'




const PrivateRoute = ({ children }) => {


    const { user, loader } = useContext(contexM)

    const location = useLocation()

    if (loader) {

        return <div className="flex justify-center h-screen items-center">


            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />

        </div>
    }


    if (user) {

        return children
    }

    return <Navigate state={{ from: location }} replace to="/Login"></Navigate>





};

export default PrivateRoute;