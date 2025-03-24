"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-100 p-4 mb-8">
      <div className="container mx-auto flex space-x-4">
        <Link
          href="/"
          className={`px-4 py-2 rounded-md ${
            pathname === "/" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
          }`}
        >
          Home
        </Link>
        <Link
          href="http://localhost:3001"
          className={`px-4 py-2 rounded-md hover:bg-gray-200`}
        >
          Remote 1
        </Link>
        <Link
          href="http://localhost:3002"
          className={`px-4 py-2 rounded-md hover:bg-gray-200`}
        >
          Remote 2
        </Link>
      </div>
    </nav>
  );
}
