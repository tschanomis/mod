import { Request, Response } from "express";

import httpStatus from "http-status";

import { deleteStaffMemberInService } from "./staffMember.service";

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

export { deleteStaffMember };
