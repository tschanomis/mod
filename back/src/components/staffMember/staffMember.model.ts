import { DataTypes } from "sequelize";

import { sequelize } from "../../config/sequelize";

import { StaffMemberInterface } from "./staffMember.interface";

const StaffMemberModel = sequelize.define<StaffMemberInterface>("StaffMember", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
});

export { StaffMemberModel };
