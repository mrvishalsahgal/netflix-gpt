import Header from "./Header";
import {useRef, useState} from "react"
import { validate } from "../utils/validate";

const Login = () => {
  const [error, setError] = useState(null);

  const email = useRef(null);
  const handlelogin = () => {
    const isValid = validate(email.current.value);
    console.log(isValid);
    if(isValid){
      setError(null);
    }else{
      setError("Invalid email");
    }
  }

  return (
    <div className="relative h-screen w-full">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src="https://occ.a.nflxso.net/dnm/api/v6/iMyKkw5SVrkCXbCfSBEb_Pjar5Y/AAAAQBTxE26zgLJoqZnmxUCfZtVJ2HbJUsVonZ_9Uo-pn68zarPK.png"
        alt="background"
      />

     

      {/* Login Content */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-white w-full max-w-md px-6">
          <h1 className="text-3xl font-bold mb-2">
            Enter your info to sign in
          </h1>

          <p className="text-gray-300 mb-6">
            Or get started with a new account.
          </p>

          <p className="text-red-500 mb-6">
           {error}
          </p>
          
          <form onSubmit={(e)=>e.preventDefault()}>
          <input
           ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="w-full px-4 py-3 mb-4 bg-black/40 border border-gray-500 rounded focus:outline-none focus:border-white"
          />
        

          <button onClick={handlelogin} className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold">
            Continue
          </button>
          </form>

           {/* Help */}
        <div className="mt-6">
          <button className="text-sm text-white hover:underline flex items-center gap-1">
            Get Help
            <span className="text-xs">⌄</span>
          </button>
        </div>

        {/* Recaptcha */}
        <p className="text-xs text-gray-400 mt-6">
          This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.{" "}
          <span className="text-white cursor-pointer hover:underline">
            Learn more
          </span>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
