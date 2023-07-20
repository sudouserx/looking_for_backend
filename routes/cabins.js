import express from "express";
import {
  getCabin,
  getCabins,
  getReportedCabins,
  addCabin,
  updateCabin,
  reportCabin,
} from "../controllers/cabins";

const cabinRoutes = express.Router();

/** READ */
cabinRoutes.get("/", getCabins);
cabinRoutes.get("/:id", getCabin);
cabinRoutes.get("/reported", getReportedCabins);

/** POST */
cabinRoutes.post("/", addCabin);

/** UPDATE */
cabinRoutes.patch("/:id", updateCabin);
cabinRoutes.patch("/report/:id", reportCabin);

export default cabinRoutes;
