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
module.exports = {
  createAnnouncement,
  getAllAnnouncement,
};
