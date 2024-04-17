import { StaffMemberModel } from "../staffMember.model";

import { StaffMemberInterface } from "../staffMember.interface";

export const updateStaffMemberDbService = async (
  staffMemberId: string,
  staffMemberData: StaffMemberInterface
): Promise<Array<number>> => {
  try {
    const updatedstaffMember = await StaffMemberModel.update(staffMemberData, {
      where: { id: staffMemberId },
    });
    return updatedstaffMember;
  } catch (error) {
    console.error("DB Error updating staffMember:", error);
    throw error;
  }
};
