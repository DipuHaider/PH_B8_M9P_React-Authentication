import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);
    // console.log(authInfo);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.email.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        //create user in firebase
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>RA | Register</title>
            </Helmet>
            <div className="hero-content flex-col">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <p className="py-6">Register Authentication with firebase by Email And Password</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" required placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" required placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" required placeholder="Password" className="input input-bordered" />
                            <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-emerald-300 text-white">Register</button>
                        </div>
                    </form>
                    <p>Already Registered? <Link to="/login"><button className="btn bg-cyan-400 btn-sm text-white">Login</button></Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;