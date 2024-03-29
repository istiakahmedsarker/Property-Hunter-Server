const Announcement = require("../schema/announcementModel");

// announcement post api

const createAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        announcement,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

const getAllAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.find();

    res.status(200).json({
      status: "success",
      result: announcement.length,
      data: {
        announcement,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const announcement = await Announcement.findById(id);
    res.status(200).json({
      status: "success",
      result: announcement.length,
      data: {
        announcement,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

const updateById = async (req, res) => {
  try {
    const announcement = req.body;
    const id = req.params.id;
    const updatedDoc = await Announcement.findByIdAndUpdate(id, announcement, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        updatedDoc,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};
module.exports = {
  createAnnouncement,
  getAllAnnouncement,
  getById,
  updateById,
};
