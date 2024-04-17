import { Request, Response } from "express";

import httpStatus from "http-status";

import { deleteStaffMemberDbService } from "./deleteStaffMember.dbService";

export const deleteStaffMember = async (req: Request, res: Response) => {
  try {
    const staffMemberId: string = req.params.id;
    const staffMemberDeleting = await deleteStaffMemberDbService(staffMemberId);

    const status = staffMemberDeleting
      ? httpStatus.ACCEPTED
      : httpStatus.NOT_FOUND;

    const message = {
      message: `Staff member ${staffMemberDeleting ? "removed" : "not found"}`,
    };

    return res.status(status).send(message);
  } catch (error) {
    console.error("Error deleting staffMember:", error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }
};
