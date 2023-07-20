import Lab from "../models/labs";

/** CREATE */
export const addLab = async (req, res) => {
  try {
    const { buildingName, floorNumber, roomNumber, benchmark } = req.body;

    const newLab = new Lab({
      buildingName,
      floorNumber,
      roomNumber,
      benchmark,
    });

    await newLab.save();

    const labs = await Lab.find();

    res.status(201).json(labs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/** READ */
export const getLabs = async (req, res) => {
  try {
    const labs = await Lab.find();

    res.status(200).json(labs);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getLab = async (req, res) => {
  try {
    const lab = await Lab.findById(req.params.id);

    res.status(200).json(lab);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getReportedLabs = async (req, res) => {
  try {
    const labs = await Lab.find({ isReported: true });

    res.status(200).json(labs);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/** UPDATE */
export const reportLab = async (req, res) => {
  try {
    const lab = await Lab.findByIdAndUpdate(req.params.id, {
      isReported: true,
    });

    res.status(200).json(lab);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const updateLab = async (req, res) => {
  try {
    const lab = await Lab.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json(lab);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};