import Cabin from "../models/cabins.js";

const fetchAllCabins = async () => {
  return await Cabin.find({isReported: false}).sort({ createdAt: -1 });
};

/** CREATE */
export const addCabin = async (req, res) => {
  try {
    const { buildingName, floorNumber, roomNumber, landmark, nameOfStaff } =
      req.body;

    const newCabin = new Cabin({
      buildingName,
      floorNumber,
      roomNumber,
      landmark,
      nameOfStaff,
    });

    await newCabin.save();

    const cabins = await fetchAllCabins();
    res.status(201).json(cabins);
  } catch (error) {
    res.status(400).json({ error: "Failed to add cabin" });
  }
};

/** READ */
export const getCabins = async (req, res) => {
  try {
    const cabins = await fetchAllCabins();
    res.status(200).json(cabins);
  } catch (error) {
    res.status(404).json({ error: "Cabins not found" });
  }
};

export const getCabin = async (req, res) => {
  try {
    const cabin = await Cabin.findById(req.params.id);
    if (!cabin) {
      return res.status(404).json({ error: "Cabin not found" });
    }
    res.status(200).json(cabin);
  } catch (error) {
    res.status(404).json({ error: "Cabin not found" });
  }
};

export const getReportedCabins = async (req, res) => {
  try {
    const cabins = await Cabin.find({ isReported: true });
    res.status(200).json(cabins);
  } catch (error) {
    res.status(404).json({ error: "Reported cabins not found" });
  }
};

export const findCabinByStaffNameUsingRegex = async (req, res) => {
  try {
    const cabins = await Cabin.find({ nameOfStaff: { $regex: req.params.name } });
    res.status(200).json(cabins);
  } catch (error) {
    res.status(404).json({ error: "Cabin not found" });
  }
};

/** UPDATE */
export const reportCabin = async (req, res) => {
  try {
    await Cabin.findByIdAndUpdate(req.params.id, {
      isReported: true,
    });
    const cabins = await fetchAllCabins();
    res.status(200).json(cabins);
  } catch (error) {
    res.status(404).json({ error: "Failed to report cabin" });
  }
};

export const updateCabin = async (req, res) => {
  try {
    await Cabin.findByIdAndUpdate(req.params.id, req.body);
    const cabin = await Cabin.findById(req.params.id);
    res.status(200).json(cabin);
  } catch (error) {
    res.status(404).json({ error: "Failed to update cabin" });
  }
};
