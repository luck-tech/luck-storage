"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { UserIcon } from "lucide-react";
import React from "react";
import LoginButton from "../components/google-login";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full p-4 bg-background border-b">
        <div className="w-full flex justify-between items-center">
          <div className="w-12">{/* Empty div for balance */}</div>
          <Link
            href="/"
            className="text-2xl text-center hover:text-primary transition-colors"
          >
            luck storage
          </Link>

          <div className="w-12 flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <UserIcon className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <LoginButton />
                </DropdownMenuItem>
                <DropdownMenuItem>admin</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
    </div>
  );
}
