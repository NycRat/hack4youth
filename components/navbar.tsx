"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggleButton } from "./theme-toggle-button";
import {
  BarChartIcon,
  GearIcon,
  HeartIcon,
  Pencil2Icon,
  PersonIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

function AvahNavItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

export default function Navbar() {
  return (
    <NavigationMenu className="fixed bottom-0 left-1/2 -translate-x-1/2 p-2 w-screen bg-stone-50 dark:bg-black">
      <NavigationMenuList>
        <AvahNavItem href="/">
          <PersonIcon />
        </AvahNavItem>
        <AvahNavItem href="/log">
          <Pencil2Icon />
        </AvahNavItem>
        <AvahNavItem href="/data">
          <BarChartIcon />
        </AvahNavItem>
        <AvahNavItem href="/config">
          <GearIcon />
        </AvahNavItem>
        {/* <NavigationMenuItem> */}
        {/*   <ThemeToggleButton /> */}
        {/* </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
