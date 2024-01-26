import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";

interface ClientInterface
  extends Model<
    InferAttributes<ClientInterface>,
    InferCreationAttributes<ClientInterface>
  > {
  id: CreationOptional<number>;
  name: string;
  updatedAt: CreationOptional<Date>;
  createdAt: CreationOptional<Date>;
}

export { ClientInterface };
