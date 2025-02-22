import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface AddItemModalProps {
  mode: "want" | "portfolio" | "memo";
}

const AddItemModal: React.FC<AddItemModalProps> = ({ mode }) => {
  const router = useRouter();

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    // ここで保存処理を実装
    console.log("Save changes");
    router.push("/admin");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Item</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="hidden" />
        <div className="container mx-auto">
          <form onSubmit={handleSave} className="space-y-4">
            {mode === "want" ? (
              <div>
                <label
                  htmlFor="link"
                  className="block text-sm font-medium text-gray-700"
                >
                  Link
                </label>
                <Input type="text" id="link" defaultValue="" className="mt-1" />
              </div>
            ) : (
              <>
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
                    defaultValue=""
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
                  <Textarea id="content" defaultValue="" className="mt-1" />
                </div>
              </>
            )}
            <Button type="submit">Save</Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddItemModal;
