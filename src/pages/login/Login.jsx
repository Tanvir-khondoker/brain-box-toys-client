import { Link } from "react-router-dom";
import img from "../../../public/assets/loginpage/4419038.jpg";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
   const {signIn} = useContext(AuthContext);
   const handleLogin = event =>{
     event.preventDefault();
     const form = event.target;
     const email = form.email.value;
     const password = form.password.value;
       
     signIn(email, password)
     .then(Result =>{
        const user = Result.user;
        console.log(user);
     })
     .catch(error =>console.log(error));

    }


  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row lg:items-center w-full">
        <div className="text-center lg:text-left w-1/2">
          <img src={img} style={{borderRadius:"25px", marginLeft:"130px", marginTop:"60px"}} className="py-3 h-[55vh] rounded-xl mb-2 lg:mb-0 lg:mr-2" alt="" /> 
        </div>
        <form onSubmit={handleLogin} className="flex flex-col items-center justify-center w-full lg:w-1/2">
          <h1 className="text-center text-4xl font-bold mt-10 mb-6">Login Now</h1> 
          <div className="card w-[500px] shadow-2xl bg-base-100"> 
            <div className="card-body space-y-4 p-4 lg:p-8"> 
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" /> 
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" /> 
                
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary w-full" value="Login" />
                
                <p className="text-center mt-5 font-bold">New to BrainBox Toys?<Link to='/signup' className="text-amber-600 ">Sign Up</Link> </p>

                <div>
                    <button className="flex items-center gap-2 btn btn-outline mt-8 mb-3 mx-auto"><FaGoogle/> sign in with google</button>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
