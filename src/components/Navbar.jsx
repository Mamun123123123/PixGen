"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
 
 
  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">


        <div className="flex gap-2 items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={30}
            height={30}
            className="object-cover"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>


        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-photos">All Photos</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>

         
          {user && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
        </ul>

      
        <div className="flex items-center gap-4 text-sm">
          {isPending ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : user ? (
            <div className="flex items-center gap-3">
              
            
              <Image
                src={user?.image || "/default.png"}
                alt="user"
                width={32}
                height={32}
                className="rounded-full"
              />

           
              <div className="flex flex-col leading-tight">
                <span className="font-medium">{user?.name}</span>
                <button
                  onClick={() => authClient.signOut()}
                  className="text-xs text-red-500 text-left"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link href="/signup">SignUp</Link>
              <Link href="/signin">SignIn</Link>
            </>
          )}
        </div>

      </nav>
    </div>
  );
};

export default Navbar;