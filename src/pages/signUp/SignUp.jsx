import { Link } from "react-router-dom";
import img from "../../../public/assets/loginpage/4419038.jpg";



const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row lg:items-center w-full">
        <div className="text-center lg:text-left w-1/2">
          <img src={img} style={{borderRadius:"25px", marginLeft:"130px", marginTop:"60px"}} className="py-3 h-[55vh] rounded-xl mb-2 lg:mb-0 lg:mr-2" alt="" /> 
        </div>
        <form className="flex flex-col items-center justify-center w-full lg:w-1/2">
          <h1 className="text-center text-4xl font-bold mt-10 mb-6">Sign Up Now</h1> 
          <div className="card w-[500px] shadow-2xl bg-base-100"> 
            <div className="card-body space-y-4 p-4 lg:p-8"> 
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" /> 
              </div>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary w-full">Login</button>
                <p className="text-center mt-5 font-bold">Already have an account?<Link to='/login' className="text-amber-600 ">Sign Up</Link> </p>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
};

export default SignUp;