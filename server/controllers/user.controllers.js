import User from "../models/User.js";
import Post from "../models/Post.js";

export const updateUserById = async (req, res) => {
  if (req.user.id === req.params.id) {
    if (req.body.password) {
      req.body.password = await User.encryptPassword(req.body.password);
    }
    try {
      const udpatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({ message: "User updated", info: udpatedUser });
    } catch (error) {
      res.status(500).json({ message: "Error updating user", error });
    }
  } else {
    res.status(401).json({ message: "You don't have permission" });
  }
};

export const deleteUserById = async (req, res) => {
  if (req.user.id === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User has been deleted" });
      } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
      }
    } catch (error) {
      res.status(404).json({ message: "User not found", error });
    }
  } else {
    res.status(401).json({ message: "You don't have permission" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc;
    res.status(200).json({ info });
  } catch (error) {
    res.status(500).json({ message: "Error getting user", error });
  }
};
