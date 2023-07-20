import mongoose from "mongoose";

const LabSchema = new mongoose.Schema(
  {
    buildingName: { type: String, required: true },
    buildingNumber: { type: Number },
    floorNumber: { type: Number, default: 0 },
    roomNumber: { type: Number, required: true },
    benchmark: { type: String, default: "None" },
    department: { type: String, default: "None" },
    isReported: { type: Boolean, default: false },
    reviewedBy: { type: String, default: "None" }, // after being reported , staff reviews
  },
  {
    timestamps: true,
  }
);

const Lab = mongoose.model("Lab", LabSchema);
export default Lab;
