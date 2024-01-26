import { DataTypes } from "sequelize";

import { sequelize } from "../../config/sequelize";

import { ClientInterface } from "./client.interface";

const ClientModel = sequelize.define<ClientInterface>("Client", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
});

export { ClientModel };
