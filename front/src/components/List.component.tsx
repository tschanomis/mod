import { useState } from "react";

import { AddCircle } from "@mui/icons-material";
import { Grid, Card, CardContent, IconButton, Dialog } from "@mui/material";

import AddItemDialogContent from "./AddItemDialogContent.component";

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
  ];

  console.log(itemsType);
  console.log(addItem);

  const [openDialog, setOpenDialog] = useState(false);
  const [contentDialog, setContentDialog] = useState<null | JSX.Element>(null);

  const handleClickOpenDialog = (action: "add" | "update" | "delete") => {
    let content: null | JSX.Element = null;
    if (action === "add")
      content = (
        <AddItemDialogContent itemsType={itemsType} addItem={addItem} />
      );
    setOpenDialog(true);
    setContentDialog(content);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setContentDialog(null);
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
              onClick={() => handleClickOpenDialog("add")}
            >
              <AddCircle fontSize="inherit" />
            </IconButton>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
              {contentDialog}
            </Dialog>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default List;
