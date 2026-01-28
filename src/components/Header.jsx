import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
 const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
   signOut(auth).then(() => {
  navigate("/");
}).catch((error) => {
  console.log(error);
});

  }
  return (
    <div className="absolute top-0 left-0 w-full p-3 border-b border-amber-50/20 flex items-center justify-between">
      
      {/* LEFT: Logo */}
      <img
        className="w-40 ml-20"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix"
      />

      {/* RIGHT: Profile + Signout */}
     { user && <div className="flex items-center gap-4 mr-20">
        <img
          className="w-10 h-10 rounded"
          src={user?.photoURL}
          alt="User"
        />
        <button onClick={handleSignOut} className="font-bold text-gray-300 hover:underline">
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
