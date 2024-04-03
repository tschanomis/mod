import app from "./app";
import { sequelize } from "./config/sequelize";

const port = 3000;

sequelize
  .sync()
  .then(async () => {
    app.listen(port, (): void => {
      return console.log(`Server listening at port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error init", error);
  });
