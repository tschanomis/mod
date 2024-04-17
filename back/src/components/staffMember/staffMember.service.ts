import { StaffMemberModel } from "./staffMember.model";

import { StaffMemberInterface } from "./staffMember.interface";

const createStaffMemberInService = async (
  staffMember: StaffMemberInterface
): Promise<StaffMemberInterface> => {
  try {
    const newstaffMember: StaffMemberInterface = await StaffMemberModel.create(
      staffMember
    );
    console.log(newstaffMember);
    return newstaffMember;
  } catch (error) {
    console.error("DB Error creating staffMember:", error);
    throw error;
  }
};

const readStaffMemberInService = async (
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

const updateStaffMemberInService = async (
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

const deleteStaffMemberInService = async (id: string): Promise<boolean> => {
  try {
    const deletedstaffMember = await StaffMemberModel.destroy({
      where: { id: id },
    });
    console.log(deletedstaffMember);
    return deletedstaffMember === 1;
  } catch (error) {
    console.error("DB Error deleting staffMember:", error);
    throw error;
  }
};

export {
  createStaffMemberInService,
  readStaffMemberInService,
  updateStaffMemberInService,
  deleteStaffMemberInService,
};
