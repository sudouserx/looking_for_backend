import express from "express";
import {
  getLab,
  getLabs,
  getReportedLabs,
  addLab,
  updateLab,
  reportLab,
} from "../controllers/labs";

const labRoutes = express.Router();

/** READ */
labRoutes.get("/", getLabs);
labRoutes.get("/:id", getLab);
labRoutes.get("/reported", getReportedLabs);

/** POST */
labRoutes.post("/", addLab);

/** UPDATE */
labRoutes.patch("/:id", updateLab);
labRoutes.patch("/report/:id", reportLab);

export default labRoutes;
