import { Request, Response } from "express";

import httpStatus from "http-status";

import {
  createClientInService,
  readClientInService,
  updateClientInService,
  deleteClientInService,
} from "./client.service";

import { ClientInterface } from "./client.interface";

const createClient = async (req: Request, res: Response) => {
  try {
    const clientData: ClientInterface = req.body;
    const newClient: ClientInterface = await createClientInService(clientData);
    res
      .status(httpStatus.CREATED)
      .send({ message: "Created", data: newClient });
  } catch (error) {
    console.error("Error creating client:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};

const readClient = async (req: Request, res: Response) => {
  try {
    const clientId: string = req.params.id;
    const clientReading: ClientInterface = await readClientInService(clientId);
    res.status(httpStatus.OK).send({ message: "Read", data: clientReading });
  } catch (error) {
    console.error("Error reading client:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};

const updateClient = async (req: Request, res: Response) => {
  try {
    const clientId: string = req.params.id;
    const clientData: ClientInterface = req.body;
    const clientUpdating: boolean = await updateClientInService(
      clientId,
      clientData
    );
    res
      .status(httpStatus.OK)
      .send({ message: "StaffMember updated", data: clientUpdating });
  } catch (error) {
    console.error("Error updating client:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};

const deleteClient = async (req: Request, res: Response) => {
  try {
    const clientId: string = req.params.id;
    const clientDeleting = await deleteClientInService(clientId);
    res.status(httpStatus.ACCEPTED);
    res.send({ message: "Removed", data: clientDeleting });
  } catch (error) {
    console.error("Error deleting client:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};

export { createClient, readClient, updateClient, deleteClient };
