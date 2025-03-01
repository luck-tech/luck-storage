"use client";

import type React from "react";
import { useState } from "react";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/components/ui/alert-dialog";

interface AddItemModalProps {
  mode: "want" | "portfolio" | "memo";
}

const AddItemModal: React.FC<AddItemModalProps> = ({ mode }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirmClose, setShowConfirmClose] = useState(false);
  const [formData, setFormData] = useState({
    link: "",
    title: "",
    content: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement save logic here
    console.log("Save changes", formData);
    router.push("/admin");
    setIsOpen(false);
  };

  const handleClose = () => {
    if (formData.link || formData.title || formData.content) {
      setShowConfirmClose(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleConfirmClose = () => {
    setShowConfirmClose(false);
    setIsOpen(false);
    setFormData({ link: "", title: "", content: "" });
  };

  const handleCancelClose = () => {
    setShowConfirmClose(false);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsOpen(true)}>Add Item</Button>
        </DialogTrigger>
        <DialogContent
          onInteractOutside={(e) => {
            e.preventDefault();
            handleClose();
          }}
        >
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
                  <Input
                    type="text"
                    id="link"
                    value={formData.link}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
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
                      value={formData.title}
                      onChange={handleInputChange}
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
                      value={formData.content}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </>
              )}
              <Button type="submit">Save</Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showConfirmClose} onOpenChange={setShowConfirmClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Discard changes?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to close? Any unsaved changes will be lost.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancelClose}>
              No
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmClose}>
              Yes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AddItemModal;
