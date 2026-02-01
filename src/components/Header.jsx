import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { Supported_Languages } from "../utils/constants";
import { setLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.isGptView);
  console.log(showGptSearch);
  const navigate = useNavigate();

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(setLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }

      return () => unsubscribe();
    });
  }, []);
  return (
    <div className="absolute top-0 left-0 w-full p-3 border-b flex-col md:flex-row border-amber-50/20 flex items-center justify-between z-50">
      {/* LEFT: Logo */}
      <img className="w-40 ml-24 mx-auto" src={LOGO} alt="Netflix" />

      {/* RIGHT: Profile + Signout */}
      {user && (
        <div className="flex items-center gap-4 mr-20 mx-10">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              name=""
              id=""
              className="bg-black/20 text-white/80 rounded-lg"
            >
              {Supported_Languages.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearch}
            className="font-bold text-gray-300 cursor-pointer"
          >
            {showGptSearch ? "Browse Movies" : "GPT Search"}
          </button>
          <img className="w-10 h-10 rounded" src={user?.photoURL} alt="User" />
          <button
            onClick={handleSignOut}
            className="font-bold text-gray-300 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
