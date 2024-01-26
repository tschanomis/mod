import { Grid, Card, CardContent } from "@mui/material";

function ListComponent() {
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
  ];

  return (
    <div className="ListComponent">
      <Grid container justifyContent="center" xs={12}>
        <Grid item container xs={8}>
          {testArr.map((e) => (
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>{e.test}</CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default ListComponent;
