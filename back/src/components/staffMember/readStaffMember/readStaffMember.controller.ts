import { Request, Response } from "express";

import httpStatus from "http-status";

import { readStaffMemberInService } from "../staffMember.service";

import { StaffMemberInterface } from "../staffMember.interface";

export const readStaffMember = async (req: Request, res: Response) => {
  try {
    const staffMemberId: string = req.params.id;
    const staffMemberReading: StaffMemberInterface =
      await readStaffMemberInService(staffMemberId);

    const status = staffMemberReading ? httpStatus.OK : httpStatus.NOT_FOUND;
    const data = staffMemberReading
      ? { message: "Get staff member", data: staffMemberReading }
      : { message: "Staff member not found" };

    return res.status(status).send(data);
  } catch (error) {
    console.error("Error reading staffMember:", error);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};
