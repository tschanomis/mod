import { StaffMemberModel } from "../staffMember.model";

import { StaffMemberInterface } from "../staffMember.interface";

export const createStaffMemberDbService = async (
  staffMember: StaffMemberInterface
): Promise<StaffMemberInterface> => {
  try {
    const newstaffMember: StaffMemberInterface = await StaffMemberModel.create(
      staffMember
    );
    return newstaffMember;
  } catch (error) {
    console.error("DB Error creating staffMember:", error);
    throw error;
  }
};
