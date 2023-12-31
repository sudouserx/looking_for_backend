import mongoose from "mongoose";

const CabinSchema = new mongoose.Schema(
  {
    buildingName: { type: String, required: true },
    buildingNumber: { type: Number },
    floorNumber: { type: Number, default: 0 },
    roomNumber: { type: String, required: true },
    nameOfStaff: { type: String, required: true },
    landmark: { type: String, default: "None" },
    department: { type: String, default: "None" },
    isReported: { type: Boolean, default: false },
    reviewedBy: { type: String, default: "None" }, // after being reported , staff reviews
  },
  {
    timestamps: true,
  }
);

const Cabin = mongoose.model("Cabin", CabinSchema);
export default Cabin;
