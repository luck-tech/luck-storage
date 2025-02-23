"use client";

import type React from "react";

import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import DeleteAlert from "@/app/components/delete-alert";
import type { ItemToDelete } from "@/app/types/admin";
import AddItemModal from "@/app/components/add-item-modal";

const wantItems = [
  { id: 1, name: "Item 1", image: "/favicon.ico" },
  { id: 2, name: "Item 2", image: "/favicon.ico" },
  { id: 3, name: "Item 3", image: "/favicon.ico" },
  { id: 4, name: "Item 4", image: "/favicon.ico" },
  { id: 5, name: "Item 5", image: "/favicon.ico" },
  { id: 6, name: "Item 6", image: "/favicon.ico" },
];

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

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("want");
  const router = useRouter();

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<ItemToDelete | null>(null);

  const handleItemClick = (type: string, id: number) => {
    router.push(`/admin/${type}/${id}`);
  };

  const handleDeleteClick = (e: React.MouseEvent, type: string, id: number) => {
    e.stopPropagation();
    setItemToDelete({ type, id });
    setIsDeleteDialogOpen(true);
  };

  const handleAddItem = (type: "portfolio" | "memo") => {
    // Here you would typically make an API call to create a new item
    // For now, we'll just generate a random ID
    const newId = Math.floor(Math.random() * 1000) + 1;
    router.push(`/admin/${type}/${newId}`);
  };

  return (
    <div className="container mx-auto p-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="flex">
          <TabsTrigger value="want">Want</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="memo">Memo</TabsTrigger>
        </TabsList>
        <TabsContent value="want">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Want Management</CardTitle>
            <AddItemModal mode="want" />
          </CardHeader>
          <CardContent>
            <div className="container mx-auto p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-8">
                {wantItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-center items-center"
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      className="w-[170px] h-[170px] cursor-pointer"
                      onClick={() => handleItemClick("want", item.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </TabsContent>
        <TabsContent value="portfolio">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Portfolio Management</CardTitle>
            <Button onClick={() => handleAddItem("portfolio")}>Add Item</Button>
          </CardHeader>
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
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 hidden group-hover:flex"
                    onClick={(e) => handleDeleteClick(e, "portfolio", item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </CardContent>
        </TabsContent>
        <TabsContent value="memo">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Memo Management</CardTitle>
            <Button onClick={() => handleAddItem("memo")}>Add Item</Button>
          </CardHeader>
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
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 hidden group-hover:flex"
                    onClick={(e) => handleDeleteClick(e, "memo", item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>
      <DeleteAlert
        isDeleteDialogOpen={isDeleteDialogOpen}
        setIsDeleteDialogOpen={setIsDeleteDialogOpen}
        itemToDelete={itemToDelete}
        setItemToDelete={setItemToDelete}
      />
    </div>
  );
}
