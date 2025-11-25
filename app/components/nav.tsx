"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "text-blue-600 font-bold" : "text-white-700";

  return (
    <nav className="w-full p-4 shadow-sm bg-black flex justify-between items-center">
      <h1 className="text-white-600 font-bold">MyApp</h1>

      <div className="flex gap-6">
        <Link href="/" className={isActive("/")}>
          Home
        </Link>

        <Link href="/gsapTo" className={isActive("/gsapTo")}>
          gsapTo
        </Link>

        <Link href="/gsapFrom" className={isActive("/gsapFrom")}>
          gsapFrom
        </Link>

        <Link href="/FromTo" className={isActive("/FromTo")}>
         FromTo
        </Link>

         <Link href="/button" className={isActive("/button")}>
          button
        </Link>

        <Link href="/timeline" className={isActive("/timeline")}>
        timeline</Link>

        <Link href="/allinOne" className={isActive("/allinOne")}>
        all</Link>

        <Link href="/animation" className={isActive("/animation")}>
        anime</Link>
      </div>
    </nav>
  );
}
