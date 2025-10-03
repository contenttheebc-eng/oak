"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="/cloudinary/logo.png"
                alt="Oakss Consult Ltd"
                className="h-10 w-auto sm:h-12 md:h-14"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-6 xl:space-x-10">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="font-medium">
                  <Link href="/#who-we-are">Who we are</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className="font-medium">
                  <Link href="/#services">Our Services</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className="font-medium">
                  <Link href="/events">Events</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className="font-medium">
                  <Link href="/consultations">Consultations</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className="font-medium">
                  <Link href="/#testimonials">Testimonials</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className="font-medium">
                  <Link href="/#work-with-us">Why work with us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-4 pt-2 pb-3 space-y-3 bg-white shadow-lg border-t">
          <Link
            href="/#who-we-are"
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Who we are
          </Link>

          <Link
            href="/#services"
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Our Services
          </Link>

          <Link
            href="/events"
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/consultations"
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Consultations
          </Link>

          <Link
            href="/#testimonials"
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </Link>

          <Link
            href="/#work-with-us"
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600 hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Why work with us
          </Link>
        </div>
      </div>
    </header>
  );
}
