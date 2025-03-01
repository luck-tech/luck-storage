"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import NavigationButton from "@/app/components/navigation-button";
import Image from "next/image";

export default function WantPage() {
  const router = useRouter();

  const wantItems = [
    {
      id: 1,
      image: "/favicon.ico",
      link: "https://example.com/",
    },
    {
      id: 2,
      image: "/favicon.ico",
      link: "https://example.com/",
    },
    {
      id: 3,
      image: "/favicon.ico",
      link: "https://example.com/",
    },
    {
      id: 4,
      image: "/favicon.ico",
      link: "https://example.com/",
    },
    {
      id: 5,
      image: "/favicon.ico",
      link: "https://example.com/",
    },
    {
      id: 6,
      image: "/favicon.ico",
      link: "https://example.com/",
    },
  ];

  return (
    <>
      <div className="p-6 grid grid-cols-3 items-center relative">
        <div className="justify-self-start">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default">info</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>
                <p>
                  This is a want page, displaying items I desire or aspire to
                  have.
                </p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <h1 className="text-2xl justify-self-center">Want</h1>
        <div className="justify-self-end">
          <NavigationButton />
        </div>
      </div>

      <div className="container mx-auto px-8 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-8">
          {wantItems.map((item) => (
            <div key={item.id} className="flex justify-center items-center">
              <Image
                height={170}
                width={170}
                src={item.image}
                alt=""
                className="cursor-pointer"
                onClick={() => router.push(item.link)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
