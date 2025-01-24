//'use client';

import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const {getUser, isAuthenticated} = getKindeServerSession();
   const user = await getUser();
  

  return (
    <header className="bg-purple-900 text-white p-4 flex justify-between items-center">
      <nav>
        <a href="/" className="mr-4 hover:underline">Home</a>
        <a href="/profile" className="hover:underline">Profile</a>
      </nav>

      {(await isAuthenticated())?(
          <>
          <LogoutLink>
        <button
         
            className="bg-green-500 px-4 py-2 rounded hover:bg-green-700"
          >
            Logout
          </button>
        </LogoutLink>
          </>
      ):(
      <div>
        <LoginLink postLoginRedirectURL="/profile">
        <button
         
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
          >
            Login
          </button>
        </LoginLink>
        
        <RegisterLink postLoginRedirectURL="/profile">
        <button
         
            className="bg-green-500 px-4 py-2 rounded hover:bg-green-700"
          >
            Register
          </button>
        </RegisterLink>
       
      </div>
      )}
    </header>
  );
};

export default Navbar;
