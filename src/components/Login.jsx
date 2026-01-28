import Header from "./Header";
import {useRef, useState} from "react"
import { validate, validatePassword } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [error, setError] = useState(null);
  const [askPassword, setAskPassword] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
const navigate = useNavigate();
const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);

const handlelogin = () => {
  // STEP 1: EMAIL
  if (!askPassword) {
    if (!email.current) return;

    const value = email.current.value;
    const isValid = validate(value);

    if (!isValid) {
      setError("Invalid email");
      return;
    }

    setEmailValue(value);
    setError(null);
    setAskPassword(true);
    return;
  }

  // STEP 2: PASSWORD
  if (askPassword) {
    if (!password.current) return;

    const passValue = password.current.value;
    const isPasswordValid = validatePassword(passValue);

    if (!isPasswordValid) {
      setError("Invalid password");
      return;
    }

    setError(null);

    // 🔥 SIGN IN OR SIGN UP
    if (isSignIn) {
      // 👉 EXISTING USER
      signInWithEmailAndPassword(auth, emailValue, passValue)
        .then((userCredential) => {
          console.log("Signed in:", userCredential.user);
          // navigate to home
          navigate("/browse");
        })
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            setError("User not found");
          } else if (error.code === "auth/wrong-password") {
            setError("Wrong password");
          } else {
            setError(error.message);
          }
        });
    } else {
      // 👉 NEW USER
      createUserWithEmailAndPassword(auth, emailValue, passValue)
        .then((userCredential) => {
          console.log("User created:", userCredential.user);
          
updateProfile(userCredential.user, {
  displayName: "Vishal Sahgal", photoURL: "https://lh3.googleusercontent.com/a/ACg8ocJd3D2Wdb0MOJ7EhUxZ0x42GBVyXJgEwWZw5wo07AY5RJ9XwEl0_g=s96-c"
}).then(() => {
  const {uid, email, displayName, photoURL} = userCredential.user;
     
      dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
      
          navigate("/browse");
  // Profile updated!
  // ...
}).catch((error) => {
  setError(error.message);
  // An error occurred
  // ...
});

        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setError("Email already in use");
          } else {
            setError(error.message);
          }
        });
    }
  }
};





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
          
          <form onSubmit={(e) => e.preventDefault()}>

  {/* EMAIL STEP */}
 {!askPassword && (
  <input
    ref={email}
    type="text"
    placeholder="Email or mobile number"
    className="w-full px-4 py-3 mb-4 bg-black/40 border border-gray-500 rounded focus:outline-none focus:border-white"
  />
)}


  {/* PASSWORD STEP */}
  {askPassword && (
    <input
      ref={password}
      type="password"
      placeholder={isSignIn ? "Enter your password" : "Create your password"}
      className="w-full px-4 py-3 mb-4 bg-black/40 border border-gray-500 rounded focus:outline-none focus:border-white"
    />
  )}

  <button
    onClick={handlelogin}
    className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold"
  >
    {isSignIn ? "Continue" : "Sign Up"}
  </button>
<p className="text-gray-300 text-sm mt-6">
  {isSignIn ? "New to Netflix?" : "Already have an account?"}{" "}
  <span
    onClick={() => {
      setIsSignIn(!isSignIn);
      setAskPassword(false);
      setError(null);
    }}
    className="text-white cursor-pointer hover:underline"
  >
    {isSignIn ? "Sign up now" : "Sign in"}
  </span>
</p>

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
