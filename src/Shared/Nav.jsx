import { useContext } from "react";
import { Link } from "react-router-dom";
import { contexM } from "../Authentication/AuthProvider";

{/* TODO : unpin this */ }

import { FaCartPlus } from "react-icons/fa";
import useCart from "../Hooks/UseCart";

const Nav = () => {

    const [cart] = useCart()
    console.log('this the cart length', cart);


    const { user, loader, SingINUSER } = useContext(contexM)

    const handleLogout = () => {

        SingINUSER()
            .then(() => {

            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu flex gap-5 menu-horizontal px-1">

                        <Link to="/">Home</Link>
                        <Link to="/Loginm">Login2</Link>

                        <Link to="/Register">Register</Link>
                        {
                            user ? <>
                                <button onClick={handleLogout}>Logout</button>
                            </>
                                : <>
                                    <Link to="/Login">Login</Link>

                                </>
                        }


                        {
                            user &&
                            <>

                                <img className="w-20 h-20 rounded-full " src={user.photoURL} alt="" />
                                <p>{user.email}</p>
                            </>
                        }

                        <div>
                            <Link to="/CardPage">

                                {/* TODO : unpin this */}

                                <button className="btn btn-active btn-secondary"> <FaCartPlus className="mr-2">yar</FaCartPlus>

                                    {
                                        cart?.length || 0

                                    }
                                </button>
                            </Link>
                        </div>


                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;