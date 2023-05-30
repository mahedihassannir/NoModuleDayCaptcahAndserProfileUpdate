import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Form, Link } from "react-router-dom";

// here is the css import 
import './bg.css'

const LoginF = () => {

    const [show, SetHide] = useState(false)

    const handleLoginFrom = (e) => {
        e.preventDefault()
        const from = e.target

        const email = from.email.value
        const password = from.password.value

        console.log(email, password);
    }

    return (
        <div >

            <div className="md:flex w-full h-screen justify-center items-center">
                <div className="lg:w-1/2">
                    <Link to="/">
                        <img className=" h-[80vh] " src="https://i.ibb.co/VTYGYrk/resImg.jpg"></img>
                    </Link>


                </div>
                <div className="lg:w-11/12    flex justify-center ">
                    <div className="lg:w-1/2 bordergit-2 order-[#eeeeee] rounded  lg:h-[600px] p-5">
                        <Form onSubmit={handleLoginFrom} className="mt-10">
                            <div className="">
                                <label htmlFor="">
                                    <span className="text-[#000000]">Email</span>
                                </label>
                                <div className="pt-2">
                                    <input className="pl-2 md:w-11/12 py-3 rounded-md text-[#666666] border-b-2 hover:border-[#979797] border-[#666666] placeholder:text-[#0088cc]" type="email" name="email" placeholder="Your Email" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="">
                                    <span className="text-[#000000]">Password</span>
                                </label>
                                <div className="relative">

                                    <div className="pt-2">
                                        <input className=" text-lg pl-2 lg:w-11/12 py-3 rounded-md text-[#666666] hover:border-[#979797] border-b-2 border-[#666666] placeholder:text-[#0088cc]" type={show ? "password" : "text"} name="password" placeholder="Your password" />
                                    </div>
                                    <div onClick={() => SetHide(!show)} className="cursor-pointer absolute top-1/2 ml-[350px] ">
                                        {

                                            show ? <FaEye className="text-lg"></FaEye> : <FaEyeSlash className="text-lg"></FaEyeSlash>

                                        }

                                    </div>
                                </div>
                            </div>

                            <div className="mt-2">
                                <Link to="/">
                                    <span className="link">Have an account</span>
                                </Link>
                            </div>
                            <div className="mt-5">
                                <button type="submit" className="py-3 w-11/12 bg-[#666666] text-white font-bold">Login</button>
                            </div>

                        </Form>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default LoginF;