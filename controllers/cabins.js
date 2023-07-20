import Cabin from "../models/cabins";

/** CREATE */
export const addCabin = async (req, res) => {
  try {
    const { buildingName, floorNumber, roomNumber, benchmark, nameOfStaff } =
      req.body;

    const newCabin = new Cabin({
      buildingName,
      floorNumber,
      roomNumber,
      benchmark,
      nameOfStaff,
    });

    await newCabin.save();

    const Cabins = await Cabin.find();

    res.status(201).json(Cabins);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/** READ */
export const getCabins = async (req, res) => {
  try {
    const Cabins = await Cabin.find();

    res.status(200).json(Cabins);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getCabin = async (req, res) => {
  try {
    const Cabin = await Cabin.findById(req.params.id);

    res.status(200).json(Cabin);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getReportedCabins = async (req, res) => {
  try {
    const Cabins = await Cabin.find({ isReported: true });

    res.status(200).json(Cabins);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/** UPDATE */
export const reportCabin = async (req, res) => {
  try {
    const Cabin = await Cabin.findByIdAndUpdate(req.params.id, {
      isReported: true,
    });

    res.status(200).json(Cabin);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const updateCabin = async (req, res) => {
  try {
    const Cabin = await Cabin.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json(Cabin);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
