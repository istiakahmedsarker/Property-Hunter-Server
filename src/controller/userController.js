const User = require("../schema/userModel");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      result: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

const makeModerator = async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: id };
    const update = { role: "moderator" };
    let doc = await User.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: doc,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

const makeMember = async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: id };
    const update = { role: "member" };
    let doc = await User.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: doc,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};

const makeUser = async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: id };
    const update = { role: "user" };
    let doc = await User.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: doc,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};
module.exports = {
  getAllUser,
  createUser,
  deleteUser,
  getSingleUser,
  makeModerator,
  makeMember,
  makeUser,
};
