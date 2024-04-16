import { Request, Response } from "express";

import httpStatus from "http-status";

import { checkingRequiredFields } from "../../../core/utils/checkingRequiredFields/checkingRequiredFields";

import { createStaffMemberInService } from "../staffMember.service";

import { StaffMemberInterface } from "../staffMember.interface";

export const createStaffMember = async (req: Request, res: Response) => {
  try {
    const requiredFields = ["firstName", "lastName"];
    const checkedRequiredFields = checkingRequiredFields(
      requiredFields,
      req.body
    );

    if (checkedRequiredFields) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Missing fields", errors: checkedRequiredFields });
    }

    const staffMemberData: StaffMemberInterface = req.body;
    const newstaffMember: StaffMemberInterface =
      await createStaffMemberInService(staffMemberData);

    return res
      .status(httpStatus.CREATED)
      .send({ message: "New staffmember created", data: newstaffMember });
  } catch (error) {
    console.error("Error creating staffMember:", error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};
