import { Router } from "express";

import {
  createClient,
  readClient,
  updateClient,
  deleteClient,
} from "./client.controller";

const router: Router = Router();

router.post("/client/", createClient);
router.get("/client/:id", readClient);
router.put("/client/:id", updateClient);
router.delete("/client/:id", deleteClient);

export default router;
