import { Request, Response } from "express";

import httpStatus from "http-status";

import {
  createAppointementInService,
  readAppointementInService,
  updateAppointementInService,
  deleteAppointementInService,
} from "./appointement.service";

import { AppointementInterface } from "./appointement.interface";

const createAppointement = async (req: Request, res: Response) => {
  try {
    const appointementData: AppointementInterface = req.body;
    const newAppointement: AppointementInterface =
      await createAppointementInService(appointementData);
    res
      .status(httpStatus.CREATED)
      .send({ message: "Created", data: newAppointement });
  } catch (error) {
    console.error("Error creating appointement:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};

const readAppointement = async (req: Request, res: Response) => {
  try {
    const appointementId: string = req.params.id;
    const appointementReading: AppointementInterface =
      await readAppointementInService(appointementId);
    res
      .status(httpStatus.OK)
      .send({ message: "Read", data: appointementReading });
  } catch (error) {
    console.error("Error reading appointement:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};

const updateAppointement = async (req: Request, res: Response) => {
  try {
    const appointementId: string = req.params.id;
    const appointementData: AppointementInterface = req.body;
    const appointementUpdating: boolean = await updateAppointementInService(
      appointementId,
      appointementData
    );
    res
      .status(httpStatus.OK)
      .send({ message: "StaffMember updated", data: appointementUpdating });
  } catch (error) {
    console.error("Error updating appointement:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};

const deleteAppointement = async (req: Request, res: Response) => {
  try {
    const appointementId: string = req.params.id;
    const appointementDeleting = await deleteAppointementInService(
      appointementId
    );
    res.status(httpStatus.ACCEPTED);
    res.send({ message: "Removed", data: appointementDeleting });
  } catch (error) {
    console.error("Error deleting appointement:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};

export {
  createAppointement,
  readAppointement,
  updateAppointement,
  deleteAppointement,
};
