import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";

interface StaffMemberInterface
  extends Model<
    InferAttributes<StaffMemberInterface>,
    InferCreationAttributes<StaffMemberInterface>
  > {
  id: CreationOptional<number>;
  firstName: string;
  lastName: string;
  updatedAt: CreationOptional<Date>;
  createdAt: CreationOptional<Date>;
}

export { StaffMemberInterface };
