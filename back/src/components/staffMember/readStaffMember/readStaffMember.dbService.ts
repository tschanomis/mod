import { StaffMemberModel } from "../staffMember.model";

import { StaffMemberInterface } from "../staffMember.interface";

export const readStaffMemberDbService = async (
  id: string
): Promise<StaffMemberInterface> => {
  try {
    const staffMember: StaffMemberInterface = await StaffMemberModel.findByPk(
      id
    );
    return staffMember;
  } catch (error) {
    console.error("DB Error reading staffMember:", error);
    throw error;
  }
};
