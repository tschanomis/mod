import { StaffMemberModel } from "../staffMember.model";

export const deleteStaffMemberDbService = async (
  id: string
): Promise<boolean> => {
  try {
    const deletedstaffMember = await StaffMemberModel.destroy({
      where: { id: id },
    });
    return deletedstaffMember === 1;
  } catch (error) {
    console.error("DB Error deleting staffMember:", error);
    throw error;
  }
};
