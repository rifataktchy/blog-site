'use client';

import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  

  return (
    <header className="bg-red-600 text-white p-4 flex justify-between items-center">
      <nav>
        <a href="/" className="mr-4 hover:underline">Home</a>
        <a href="/profile" className="hover:underline">Profile</a>
      </nav>
      <div>
        <LoginLink>
        <button
         
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </LoginLink>
        
        <RegisterLink>
        <button
         
            className="bg-green-500 px-4 py-2 rounded hover:bg-green-700"
          >
            Login
          </button>
        </RegisterLink>
       
      </div>
    </header>
  );
};

export default Navbar;
