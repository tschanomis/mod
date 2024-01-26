import { Router } from "express";

import staffMember from "./components/staffMember/staffMember.router";
import client from "./components/client/client.router";
import Appointement from "./components/appointement/appointement.router";

const router: Router = Router();

router.use(staffMember);
router.use(client);
router.use(Appointement);

export default router;
