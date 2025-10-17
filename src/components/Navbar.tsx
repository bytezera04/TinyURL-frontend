"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">TinyURL</h1>

        <NavigationMenu.Root>
          <NavigationMenu.List className="flex space-x-4">
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link href="/" className="text-gray-700 hover:text-blue-600">
                  Home
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link href="/about" className="text-gray-700 hover:text-blue-600">
                  About
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </nav>
    </header>
  );
}
