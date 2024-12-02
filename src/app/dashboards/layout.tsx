"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  return (
    <div>
      <nav className="flex gap-5 p-4">
        <Link
          className={`underline ${pathname === "/dashboards/entreprise" && "text-yellow-400"}`}
          href="/dashboards/entreprise"
        >
          Dashboard Finances
        </Link>
        <Link
          className={`underline ${pathname === "/dashboards/rh" && "text-yellow-400"}`}
          href="/dashboards/rh"
        >
          Dashboard RH
        </Link>
      </nav>
      {children}
    </div>
  );
}

export default layout;
