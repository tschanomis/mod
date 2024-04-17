import { Router } from "express";

import { createStaffMember } from "./createStaffMember/createStaffMember.controller";
import { readStaffMember } from "./readStaffMember/readStaffMember.controller";
import { updateStaffMember } from "./updateStaffMember/updateStaffMember.controller";
import { deleteStaffMember } from "./deleteStaffMember/deleteStaffMember.controller";

const router: Router = Router();

router.post("/staffmember/", createStaffMember);
router.get("/staffmember/:id", readStaffMember);
router.put("/staffmember/:id", updateStaffMember);
router.delete("/staffmember/:id", deleteStaffMember);

export default router;
