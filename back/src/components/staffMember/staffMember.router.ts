import { Router } from "express";

import {
  createStaffMember,
  readStaffMember,
  updateStaffMember,
  deleteStaffMember,
} from "./staffMember.controller";

const router: Router = Router();

router.post("/staffmember/", createStaffMember);
router.get("/staffmember/:id", readStaffMember);
router.put("/staffmember/:id", updateStaffMember);
router.delete("/staffmember/:id", deleteStaffMember);

export default router;
