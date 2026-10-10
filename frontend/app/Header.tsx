"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    function checkLoginStatus() {
      const token = sessionStorage.getItem("token");

      setIsLoggedIn(!!token);
    }

    // Check when the component first loads
    checkLoginStatus();

    // Listen for authentication changes
    window.addEventListener("auth-change", checkLoginStatus);

    return () => {
      window.removeEventListener("auth-change", checkLoginStatus);
    };
  }, []);

  function handleLogout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");

    window.dispatchEvent(new Event("auth-change"));

    router.push("/");
  }

  return (
    <header className="flex justify-between gap-4 p-4">
      <h1>
        <Link href="/">Banking Buddy</Link>
      </h1>

      <ul className="flex gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>

        {isLoggedIn ? (
          <>
            <li>
              <Link href="/account">Account</Link>
            </li>

            <li>
              <button
                type="button"
                onClick={handleLogout}
                className="cursor-pointer"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/register">Create Account</Link>
            </li>

            <li>
              <Link href="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}