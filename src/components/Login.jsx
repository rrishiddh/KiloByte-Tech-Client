import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from 'sweetalert2'
import login from "./../assets/login.gif";



const Login = () => {
  const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  
  const handelSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email,password)
    .then(result => {
      const user = result.user;
      setUser(user)
      Swal.fire({
        title: "Successfully Login!",
        text: `Welcome ${user.displayName}!`,
        icon: "success"
      });
      navigate(location?.state ? location.state : "/") 
    })
    .catch((err)=> {
      setError({ ...error, login: err.code })
     })

  }
  const handelGoogleSignIn = ()=>{
    signInWithGoogle()
    .then(result=>{
      const user = result.user;
      setUser(user)
      Swal.fire({
        title: "Successfully Login!",
        text: `Welcome ${user.displayName}!`,
        icon: "success"
      });
      navigate(location?.state ? location.state : "/") 
    }).catch((err)=> {
      setError({ ...error, login: err.code })
     })
  }

  
  return (
    <div className="min-h-screen w-[90%] mx-auto">
      <div className=" justify-center  items-center my-10">
<h2 className="text-2xl font-semibold  text-center mb-6 ">Login To Your Account</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
      <img src={login} className="w-[70%] mx-auto my-auto" ></img>
      <div className="card card-compact  border-2 w-[70%] max-sm:mx-auto shrink-0 p-6">
        <form onSubmit={handelSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />            
            
          </div>
          {
              error.login && (
                <label className="label text-sm text-red-600">
                  {error.login}
                </label>
              )
            }
          <div className="form-control mt-6">
            <button className="btn max-sm:btn-sm btn-ghost  dark:text-black bg-gradient-to-r from-[#29dadd] to-[#787878a9]">Login</button>
          </div>
        </form>
        <div className="divider">OR</div>
        <button onClick={handelGoogleSignIn} className="btn max-sm:btn-sm bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-500 hover:to-sky-600 dark:text-black w-[95%] mx-auto my-4">Sign In With Google</button>
        <p className="text-center text-sm font-semibold">Don&apos;t have account? <Link to='/auth/register' className="text-blue-500 underline">Register</Link></p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
