"use client";

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

export default function EditPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  // この部分は実際のアプリケーションでは、APIからデータを取得する処理に置き換えてください
  const item = {
    name: `Item ${id}`,
    content: `This is the content for want item ${id}.`,
  };

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    // ここで保存処理を実装します
    console.log("Save changes");
    router.push("/admin");
  };

  return (
    <div className="container mx-auto p-8">
      <Card>
        <CardHeader>
          <CardTitle>Edit Want Item</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                defaultValue={item.name}
                className="mt-1"
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
                defaultValue={item.content}
                className="mt-1"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/admin")}
              >
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
