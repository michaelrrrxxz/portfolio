"use client";

import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Github, Facebook } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

// Define your navigation menu items
const NAV_MENU = [
  {
    name: "Github",
    icon: Github,
    href: "https://github.com/michaelrrrxxz",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/michaelmanagaoangfb",
  },
  {
    name: "About",
    icon: Bars3Icon, // Note: For 'About' you might want a different icon if it's not a generic menu.
    href: "#",
  },
];

// Helper component for navigation items
interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  className?: string; // Add className for styling flexibility
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
function NavItem({ children, href, className, onClick }: NavItemProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className ?? ""}`}
          onClick={onClick}
        >
          {children}
        </a>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}


export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-full border-b">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo/Brand Name */}
        <a href="#" className="text-lg font-bold">
          MyBrand
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {NAV_MENU.map((item) => (
              <NavItem key={item.name} href={item.href}>
                <div className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </div>
              </NavItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation (Sheet) */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Bars3Icon className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 pt-6">
              {NAV_MENU.map((item) => (
                <NavItem
                  key={item.name}
                  href={item.href}
                  className="text-lg"
                  onClick={() => setIsOpen(false)} // Close sheet on item click
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </div>
                </NavItem>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}