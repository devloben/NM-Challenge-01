"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="flex gap-x-5 bg-gray-800 p-4">
      <Link className="underline" href="/">
        Accueil
      </Link>
      <Link className="underline" href="/blog">
        Blog
      </Link>
      <Link
        className={`underline ${pathName.includes("/dashboards") && "text-yellow-400"}`}
        href="/dashboards"
      >
        Dashboards
      </Link>
      <Link className="underline" href="/users">
        Utilisateurs
      </Link>
      <Link className="underline" href="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
