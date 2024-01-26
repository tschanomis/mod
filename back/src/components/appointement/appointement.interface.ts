import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";

interface AppointementInterface
  extends Model<
    InferAttributes<AppointementInterface>,
    InferCreationAttributes<AppointementInterface>
  > {
  id: CreationOptional<number>;
  date: Date;
  startTime: Date;
  endTime: Date;
  updatedAt: CreationOptional<Date>;
  createdAt: CreationOptional<Date>;
}

export { AppointementInterface };
