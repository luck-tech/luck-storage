"use client";

import { useState } from "react";
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
import { Info } from "lucide-react";
import NavigationButton from "@/app/components/navigation-button";

export default function MemoPage() {
  const router = useRouter();
  const [showCollection, setShowCollection] = useState(false);

  const memoItems = [
    {
      id: 1,
      title: "Memo 1",
      date: "2023-07-15",
      content: "This is the beginning of memo 1...",
    },
    {
      id: 2,
      title: "Memo 2",
      date: "2023-07-20",
      content: "This is the beginning of memo 2...",
    },
    {
      id: 3,
      title: "Memo 3",
      date: "2023-07-25",
      content: "This is the beginning of memo 3...",
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
                <p>This is a memo page, showcasing my notes and records.</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <h1 className="text-2xl justify-self-center">Memo</h1>
        <div className="justify-self-end">
          <NavigationButton />
        </div>
      </div>
      <CardContent>
        <div className="space-y-4">
          {memoItems.map((item) => (
            <Card
              key={item.id}
              className="relative group cursor-pointer"
              onClick={() => handleItemClick("memo", item.id)}
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
