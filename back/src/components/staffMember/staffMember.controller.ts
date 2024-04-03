import { Request, Response } from "express";

import httpStatus from "http-status";

import {
  createStaffMemberInService,
  readStaffMemberInService,
  updateStaffMemberInService,
  deleteStaffMemberInService,
} from "./staffMember.service";

import { StaffMemberInterface } from "./staffMember.interface";

const createStaffMember = async (req: Request, res: Response) => {
  try {
    // TO DO
    // const requiredFields= []
    // create function
    // return ?message && fields
    const { firstname, lastname } = req.body;
    if (!firstname || !lastname) {
      res
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Missing firstname or lastname" });
    }

    const staffMemberData: StaffMemberInterface = req.body;
    const newstaffMember: StaffMemberInterface =
      await createStaffMemberInService(staffMemberData);
    res
      .status(httpStatus.CREATED)
      .send({ message: "Created", data: newstaffMember });
  } catch (error) {
    console.error("Error creating staffMember:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};

const readStaffMember = async (req: Request, res: Response) => {
  try {
    const staffMemberId: string = req.params.id;
    const staffMemberReading: StaffMemberInterface =
      await readStaffMemberInService(staffMemberId);
    res
      .status(httpStatus.OK)
      .send({ message: "Read", data: staffMemberReading });
  } catch (error) {
    console.error("Error reading staffMember:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};

const updateStaffMember = async (req: Request, res: Response) => {
  try {
    const staffMemberId: string = req.params.id;
    const staffMemberData: StaffMemberInterface = req.body;
    const staffMemberUpdating: boolean = await updateStaffMemberInService(
      staffMemberId,
      staffMemberData
    );
    res
      .status(httpStatus.OK)
      .send({ message: "StaffMember updated", data: staffMemberUpdating });
  } catch (error) {
    console.error("Error updating staffMember:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};

const deleteStaffMember = async (req: Request, res: Response) => {
  try {
    const staffMemberId: string = req.params.id;
    const staffMemberDeleting = await deleteStaffMemberInService(staffMemberId);
    res.status(httpStatus.ACCEPTED);
    res.send({ message: "Removed", data: staffMemberDeleting });
  } catch (error) {
    console.error("Error deleting staffMember:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};

export {
  createStaffMember,
  readStaffMember,
  updateStaffMember,
  deleteStaffMember,
};
