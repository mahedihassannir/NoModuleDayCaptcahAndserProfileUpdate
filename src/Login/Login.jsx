import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

import Swal from 'sweetalert2'
import { contexM } from "../Authentication/AuthProvider";

const Login = () => {

    const navigate = useNavigate()

    const { LoginTheUser } = useContext(contexM)
    const CaptchaRef = useRef()


    const [Disable, Setdisable] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(6);
    })

    const handleLogin = (e) => {
        e.preventDefault()
        const from = e.target

        const email = from.email.value
        const password = from.password.value


        console.log(email, password);

        LoginTheUser(email, password)
            .then(res => {
                const user = res.user
                console.log(user);

                if (user) {
                    Swal.fire(
                        'login done',
                        'You clicked the button!',
                        'success'
                    )


                }

                navigate('/')

            })
            .catch(err => {
                console.log(err);
            })

    }

    const handleValidate = () => {

        const user_captcha_value = CaptchaRef.current.value
        if (validateCaptcha(user_captcha_value)) {
            Setdisable(false)
        }
        else {
            Setdisable(true)
        }

    }





    return (
        <div>
            <h1 className="text-3xl text-center font-bold text-red-600">Hey bro you are in Login page</h1>
            <div className="hero min-h-screen ">
                <div className="hero-content  w-1/2 flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" />


                            </div>
                            {/* captcha */}
                            <div>

                                <LoadCanvasTemplate />

                                <button className="btn btn-primary" onClick={handleValidate}>Validate</button> <br />
                                <input ref={CaptchaRef} name="validate" type="text" placeholder="validate" className="input input-bordered" />
                            </div>


                            <Link to="/Register">
                                <p className="link">
                                    new to this website please register
                                </p>
                            </Link>

                            <div className="form-control mt-6">
                                <button disabled={Disable} type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;