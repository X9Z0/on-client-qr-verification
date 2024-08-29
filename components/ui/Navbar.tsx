"use client";

import React, { useState } from "react";
//import { HoveredLink, Menu, MenuItem, ProductItem } from "";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/demo"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Demo"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
