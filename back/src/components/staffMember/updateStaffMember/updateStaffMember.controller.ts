import { Request, Response } from "express";

import httpStatus from "http-status";

import { updateStaffMemberDbService } from "./updateStaffMember.dbServices";

import { StaffMemberInterface } from "../staffMember.interface";

export const updateStaffMember = async (req: Request, res: Response) => {
  try {
    const staffMemberId: string = req.params.id;
    const staffMemberData: StaffMemberInterface = req.body;

    const staffMemberUpdating: Array<number> = await updateStaffMemberDbService(
      staffMemberId,
      staffMemberData
    );

    const response = staffMemberUpdating[0] === 1;

    const status = response ? httpStatus.OK : httpStatus.NOT_FOUND;
    const data = {
      message: `Staff member ${response ? "updated" : "not found"}`,
    };

    return res.status(status).send(data);
  } catch (error) {
    console.error("Error updating staffMember:", error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};
