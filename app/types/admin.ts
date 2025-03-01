export interface ItemToDelete {
  type: string;
  id: number;
}

export interface DeleteAlertProps {
  isDeleteDialogOpen: boolean;
  setIsDeleteDialogOpen: (isOpen: boolean) => void;
  itemToDelete: ItemToDelete | null;
  setItemToDelete: (item: ItemToDelete | null) => void;
}
