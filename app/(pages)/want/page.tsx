"use client";

import { useRouter } from "next/navigation";

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
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-8">
        {wantItems.map((item) => (
          <div key={item.id} className="flex justify-center items-center">
            <img
              src={item.image}
              className="w-[170px] h-[170px] cursor-pointer"
              onClick={() => router.push(item.link)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
