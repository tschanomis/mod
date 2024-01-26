import { DataTypes } from "sequelize";

import { sequelize } from "../../config/sequelize";

import { AppointementInterface } from "./appointement.interface";

const AppointementModel = sequelize.define<AppointementInterface>(
  "Appointement",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
    },
    startTime: {
      type: DataTypes.DATE,
    },
    endTime: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
  }
);

export { AppointementModel };
