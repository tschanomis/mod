import { DialogTitle } from "@mui/material";

function AddItemDialogContent({
  itemsType,
  addItem,
}: {
  itemsType: string;
  addItem: () => void;
}) {
  return <DialogTitle>{itemsType}</DialogTitle>;
}

export default AddItemDialogContent;
