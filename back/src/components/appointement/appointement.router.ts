import { Router } from "express";

import {
  createAppointement,
  readAppointement,
  updateAppointement,
  deleteAppointement,
} from "./appointement.controller";

const router: Router = Router();

router.post("/appointement/", createAppointement);
router.get("/appointement/:id", readAppointement);
router.put("/appointement/:id", updateAppointement);
router.delete("/appointement/:id", deleteAppointement);

export default router;
