import { AddCircle } from "@mui/icons-material";
import {
  Grid,
  Card,
  CardContent,
  IconButton,
  Dialog,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

function List({
  itemsType,
  addItem,
}: {
  itemsType: string;
  addItem: () => void;
}) {
  const testArr = [
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
    { test: "test" },
  ];
  console.log(itemsType);
  console.log(addItem);

  const [openDialog, setOpenDialog] = useState(true);
  const [contentDialog, setContentDialog] = useState<null | string>(null);

  const handleClickOpenDialog = (value: string) => {
    setOpenDialog(true);
    setContentDialog(value);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="ListComponent">
      <Grid container justifyContent="center">
        <Grid item container xs={9} rowSpacing={3} columnSpacing={3} p={3}>
          {/* CARDS */}
          {testArr.map((e) => (
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>{e.test}</CardContent>
              </Card>
            </Grid>
          ))}

          {/* ADD'S BUTTON */}
          <Grid item container xs={12} md={3}>
            <IconButton
              color="primary"
              size="large"
              onClick={() => setOpenDialog(true)}
            >
              <AddCircle fontSize="inherit" />
            </IconButton>
            <Dialog
              open={openDialog}
              onClose={() => handleClickOpenDialog(itemsType)}
            >
              <DialogTitle>ajout de {itemsType}</DialogTitle>
            </Dialog>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default List;
