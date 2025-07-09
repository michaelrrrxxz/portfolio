"use client";

import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { NAV_MENU } from "@/constants/nav-menu";

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

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

function NavItem({ children, href, className, onClick }: NavItemProps) {
  const isExternal = href?.startsWith("http");
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={`block select-none space-y-1 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className ?? ""}`}
          onClick={onClick}
        >
          {children}
        </a>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-0"
        aria-label="Global"
      >
        {/* Brand */}
        <a href="#" className="text-lg font-bold tracking-tight">
          MichaelAngelo.Dev
        </a>

        {/* Desktop Nav */}
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

        {/* Mobile – Hamburger */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Bars3Icon className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 pt-6">
              {NAV_MENU.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-3 rounded-md px-4 py-2 text-lg hover:bg-accent hover:text-accent-foreground"
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
