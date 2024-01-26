import { ClientModel } from "./client.model";

import { ClientInterface } from "./client.interface";

const createClientInService = async (
  client: ClientInterface
): Promise<ClientInterface> => {
  try {
    const newClient: ClientInterface = await ClientModel.create(client);
    console.log(newClient);
    return newClient;
  } catch (error) {
    console.error("DB Error creating client:", error);
    throw error;
  }
};

const readClientInService = async (id: string): Promise<ClientInterface> => {
  try {
    const client: ClientInterface = await ClientModel.findByPk(id);
    console.log(client);
    return client;
  } catch (error) {
    console.error("DB Error reading client:", error);
    throw error;
  }
};

const updateClientInService = async (
  clientId: string,
  clientData: ClientInterface
): Promise<boolean> => {
  try {
    const updatedClient = await ClientModel.update(clientData, {
      where: { id: clientId },
    });
    console.log(updatedClient);
    const updateCondition: boolean = updatedClient[0] === 1;
    if (!updateCondition) throw new Error("Client not found");
    return updateCondition;
  } catch (error) {
    console.error("DB Error updating client:", error);
    throw error;
  }
};

const deleteClientInService = async (id: string): Promise<boolean> => {
  try {
    const deletedClient = await ClientModel.destroy({
      where: { id: id },
    });
    console.log(deletedClient);
    if (deletedClient === 0) throw new Error("Client not found");
    return true;
  } catch (error) {
    console.error("DB Error deleting client:", error);
    throw error;
  }
};

export {
  createClientInService,
  readClientInService,
  updateClientInService,
  deleteClientInService,
};
