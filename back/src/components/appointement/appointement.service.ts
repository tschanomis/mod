import { AppointementModel } from "./appointement.model";

import { AppointementInterface } from "./appointement.interface";

const createAppointementInService = async (
  appointement: AppointementInterface
): Promise<AppointementInterface> => {
  try {
    const newAppointement: AppointementInterface =
      await AppointementModel.create(appointement);
    console.log(newAppointement);
    return newAppointement;
  } catch (error) {
    console.error("DB Error creating appointement:", error);
    throw error;
  }
};

const readAppointementInService = async (
  id: string
): Promise<AppointementInterface> => {
  try {
    const appointement: AppointementInterface =
      await AppointementModel.findByPk(id);
    console.log(appointement);
    return appointement;
  } catch (error) {
    console.error("DB Error reading appointement:", error);
    throw error;
  }
};

const updateAppointementInService = async (
  appointementId: string,
  appointementData: AppointementInterface
): Promise<boolean> => {
  try {
    const updatedAppointement = await AppointementModel.update(
      appointementData,
      {
        where: { id: appointementId },
      }
    );
    console.log(updatedAppointement);
    const updateCondition: boolean = updatedAppointement[0] === 1;
    if (!updateCondition) throw new Error("Appointement not found");
    return updateCondition;
  } catch (error) {
    console.error("DB Error updating appointement:", error);
    throw error;
  }
};

const deleteAppointementInService = async (id: string): Promise<boolean> => {
  try {
    const deletedAppointement = await AppointementModel.destroy({
      where: { id: id },
    });
    console.log(deletedAppointement);
    if (deletedAppointement === 0) throw new Error("Appointement not found");
    return true;
  } catch (error) {
    console.error("DB Error deleting appointement:", error);
    throw error;
  }
};

export {
  createAppointementInService,
  readAppointementInService,
  updateAppointementInService,
  deleteAppointementInService,
};
