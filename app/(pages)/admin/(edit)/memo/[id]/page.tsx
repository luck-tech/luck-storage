"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import ReactMarkdown from "react-markdown";

export default function EditMemoPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const [item, setItem] = useState({
    title: "",
    date: "",
    content: "",
  });

  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    // Here you would typically fetch the item data from an API
    // For now, we'll just set some dummy data
    setItem({
      title: `Memo Item ${id}`,
      date: new Date().toISOString().split("T")[0],
      content: "This is the content of the memo item...",
    });
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically save the data to an API
    console.log("Save changes", item);
    router.push("/admin");
  };

  return (
    <div className="container mx-auto p-8">
      <Card>
        <CardHeader>
          <CardTitle>Edit Memo Item</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <Input
                type="text"
                id="title"
                name="title"
                value={item.title}
                onChange={handleInputChange}
                className="mt-1 bg-[#e7ecea] border border-black"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <Input
                type="date"
                id="date"
                name="date"
                value={item.date}
                onChange={handleInputChange}
                className="mt-1 bg-[#e7ecea] border border-black"
              />
            </div>
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700"
              >
                Content
              </label>
              <Textarea
                id="content"
                name="content"
                value={item.content}
                onChange={handleInputChange}
                className="mt-1 bg-[#e7ecea] border border-black"
                rows={10}
              />
            </div>
            <div className="flex justify-between">
              <Button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
              >
                {showPreview ? "Edit" : "Preview"}
              </Button>
              <div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/admin")}
                  className="mr-2"
                >
                  Cancel
                </Button>
                <Button type="submit">Save Changes</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      {showPreview && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <ReactMarkdown>{item.content}</ReactMarkdown>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
