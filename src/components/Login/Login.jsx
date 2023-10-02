import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {


    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
        .catch(error => {
            console.error(error)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>RA | Login</title>
            </Helmet>
            <div className="hero-content flex-col">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Login Authentication with firebase by Email And Password</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                            <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-emerald-300 text-white">Login</button>
                        </div>
                    </form>
                    <p>New here? Please <Link to="/register"><button className="btn bg-cyan-400 btn-sm text-white">Register</button></Link></p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;