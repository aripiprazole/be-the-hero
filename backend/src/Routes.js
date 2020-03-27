import { Router } from "express";

import ONGController from "./controllers/ONGController";
import IncidentController from "./controllers/IncidentController";
import ProfileController from "./controllers/ProfileController";
import SessionController from "./controllers/SessionController";

const router = new Router();

router.post("/ongs", ONGController.store);
router.get("/ongs", ONGController.index);

router.get("/login", SessionController.store);

router.post("/incidents", IncidentController.store);
router.get("/incidents", IncidentController.index);
router.delete("/incidents/:id", IncidentController.delete);

router.get("/profile", ProfileController.index);

export default router;
