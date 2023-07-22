import express from "express";
import {
  getLab,
  getLabs,
  getReportedLabs,
  addLab,
  updateLab,
  reportLab,
  findLabByNameUsingRegex,
} from "../controllers/labs.js";

const labRoutes = express.Router();

/** READ */
labRoutes.get("/", getLabs);
labRoutes.get("/:id", getLab);
labRoutes.get("/reported", getReportedLabs);
labRoutes.get("/name/:labName", findLabByNameUsingRegex);

/** POST */
labRoutes.post("/", addLab);

/** UPDATE */
labRoutes.patch("/:id", updateLab);
labRoutes.patch("/report/:id", reportLab);

export default labRoutes;
