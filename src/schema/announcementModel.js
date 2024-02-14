const mongoose = require("mongoose");
// sample
const announcement = {
  name: "Rasel",
  date: "14-02-2024",
  heading: "Big Offer",
  notice: "notice details",
  user_emai: "rasel@mail.com",
  post_date: "14-02-2024",
};

const announcementSchema = new mongoose.Schema({
  admin_name: {
    type: String,
    required: [true, "Admin name is required"],
  },
  post_date: {
    type: String,
    required: [true, "Post Date is required"],
  },
  heading: {
    type: String,
    required: [true, "Heading is required"],
  },
  notice_details: {
    type: String,
    required: [true, "Notice details is required"],
  },
  user_email: {
    type: String,
  },
});

const Announcement = mongoose.model("announcement", announcementSchema);
module.exports = Announcement;
