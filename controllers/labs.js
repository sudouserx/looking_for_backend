import Lab from "../models/labs.js";

const fetchAllLabs = async () => {
  return await Lab.find();
};

/** CREATE */
export const addLab = async (req, res) => {
  try {
    const { buildingName, floorNumber, roomNumber, landmark, labName } =
      req.body;

    const newLab = new Lab({
      buildingName,
      floorNumber,
      roomNumber,
      landmark,
      labName,
    });

    await newLab.save();

    const labs = await fetchAllLabs();
    res.status(201).json(labs);
  } catch (error) {
    res.status(400).json({ error: "Failed to add lab" });
  }
};

/** READ */
export const getLabs = async (req, res) => {
  try {
    const labs = await fetchAllLabs();
    res.status(200).json(labs);
  } catch (error) {
    res.status(404).json({ error: "Labs not found" });
  }
};

export const getLab = async (req, res) => {
  try {
    const lab = await Lab.findById(req.params.id);
    if (!lab) {
      return res.status(404).json({ error: "Lab not found" });
    }
    res.status(200).json(lab);
  } catch (error) {
    res.status(404).json({ error: "Lab not found" });
  }
};

export const getReportedLabs = async (req, res) => {
  try {
    const labs = await Lab.find({ isReported: true });
    res.status(200).json(labs);
  } catch (error) {
    res.status(404).json({ error: "Reported labs not found" });
  }
};

export const findLabByNameUsingRegex = async (req, res) => {
  try {
    const labs = await Lab.find({ labName: { $regex: req.params.labName } });
    res.status(200).json(labs);
  } catch (error) {
    res.status(404).json({ error: "Lab not found" });
  }
};

/** UPDATE */
export const reportLab = async (req, res) => {
  try {
    await Lab.findByIdAndUpdate(req.params.id, {
      isReported: true,
    });

    const labs = await fetchAllLabs();
    res.status(200).json(labs);
  } catch (error) {
    res.status(404).json({ error: "Failed to report lab" });
  }
};

export const updateLab = async (req, res) => {
  try {
    await Lab.findByIdAndUpdate(req.params.id, req.body);
    const labs = await fetchAllLabs();
    res.status(200).json(labs);
  } catch (error) {
    res.status(404).json({ error: "Failed to update lab" });
  }
};
