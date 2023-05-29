import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contexM } from "../Authentication/AuthProvider";

const Register = () => {


    const { CrateUSer, UpdateUser } = useContext(contexM)

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const from = e.target

        const name = from.name.value
        const PhotoUrl = from.PhotoUrl.value
        const email = from.email.value
        const password = from.password.value

        console.table('email:', email, 'password:', password, 'name:', name, 'PhotoUrl:', PhotoUrl);

        console.table({ name, email, password, name, PhotoUrl })

        CrateUSer(email, password)
            .then(res => {
                const user = res.user
                console.log(user);
                UpdateUser(name, PhotoUrl)
                    .then(() => {
                        console.log("user profile Updated");
                    })
                    .catch(err => {
                        console.log(err);
                    })
                navigate('/')
            })
            .catch(err => {
                console.log(err);
            })




    }


    return (
        <div>

            <h1 className="text-3xl text-center font-bold text-blue-600">Hey bro you are in register page</h1>

            <div className="hero min-h-screen ">
                <div className="hero-content  w-1/2 flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input name="name" type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input name="PhotoUrl" type="url" placeholder="email" className="input input-bordered" />
                            </div>
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
                            <Link to="/Login">
                                <p className="link">
                                    bro have an account
                                </p>
                            </Link>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;