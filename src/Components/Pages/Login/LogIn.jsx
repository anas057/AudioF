import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CgLock } from "react-icons/cg";


const Login = () => {
  // const gb = 'https://images.pexels.com/photos/3903092/pexels-photo-3903092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  return (
    <div className="w-screen h-screen flex flex-col justify-evenly">
      <div
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/17743350/pexels-photo-17743350/free-photo-of-man-wearing-headphones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
          backgroundOrigin: "border-box",
          backgroundPosition: "Center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "Cover",
        }}
        className="w-full h-full"
      >
        <div className="w-full h-full bg-gradient-to-br from-emerald-500/50 to-slate-900/50 flex flex-col justify-center items-center text-center">
            <div className="text-white leading-tight">
                <h1 className="text-[4rem] font-bold">Audio</h1>
                <h3 className="text-[1.2rem] font-medium">It's modular and designed to last</h3>
            </div>
            <div className=" flex flex-col items-center">
            <div className="flex justify-center items-center p-6">
                <MdOutlineEmail className="text-gray-500 text-[1.3rem] relative left-7" />
                <input type="Email" className="text-gray-500 w-[300px] p-[10px] pl-10 rounded outline-none" placeholder="Email" />
            </div>
            <div className="flex justify-center items-center">
            
                <CgLock className="text-gray-500 text-[1.3rem] relative left-7" />
                <input type="Password" className="text-gray-500 p-[10px] w-[300px] pl-10 rounded outline-none" placeholder="Password" />
            </div>
            <div className="flex flex-col justify-center items-center text-white p-4 font">
                <a className="font-medium"> Forgot Password</a>
                <button className="bg-[#0ACF83] p-2 ml-3 rounded w-[270px] font-semibold mt-2">Sign In</button>
                <p className="mt-2">
                    Didn't have any account? <a className="text-[#0ACF83] font-medium underline">Sign Up Here</a>
                </p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
