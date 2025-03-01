"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import NavigationButton from "@/app/components/navigation-button";

export default function PortfolioPage() {
  const router = useRouter();

  const portfolioItems = [
    {
      id: 1,
      title: "Portfolio 1",
      date: "2023-06-01",
      content: "This is the beginning of portfolio 1...",
    },
    {
      id: 2,
      title: "Portfolio 2",
      date: "2023-06-15",
      content: "This is the beginning of portfolio 2...",
    },
    {
      id: 3,
      title: "Portfolio 3",
      date: "2023-07-01",
      content: "This is the beginning of portfolio 3...",
    },
  ];

  const handleItemClick = (type: string, id: number) => {
    router.push(`/${type}/${id}`);
  };

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
                  This is a portfolio page, showcasing my works and
                  achievements.
                </p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <h1 className="text-2xl justify-self-center">Portfolio</h1>
        <div className="justify-self-end">
          <NavigationButton />
        </div>
      </div>

      <CardContent>
        <div className="space-y-4">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="relative group cursor-pointer"
              onClick={() => handleItemClick("portfolio", item.id)}
            >
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </>
  );
}
