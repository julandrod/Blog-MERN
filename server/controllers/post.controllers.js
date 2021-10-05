import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  const newPost = new Post({
    ...req.body,
    username: req.user.username,
    userId: req.user.id,
  });
  try {
    const savedPost = await newPost.save();
    res.status(200).json({ message: "post created", info: savedPost });
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
};

export const updatePost = async (req, res) => {
  try {
    const postFound = await Post.findById(req.params.id);
    if (postFound.userId === req.user.id) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json({ message: "Post updated", info: updatedPost });
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json({ message: "You don't have permission" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating post", error });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postFound = await Post.findById(req.params.id);

    if (!postFound) return res.status(404).json({ message: "Post not found" });

    if (postFound.userId === req.user.id || req.user.isAdmin) {
      try {
        await postFound.delete();
        res.status(200).json({ message: "Post has been deleted" });
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json({ message: "You don't have permission" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting post", error });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({ info: post });
  } catch (error) {
    res.status(500).json({ message: "Error getting the post", error });
  }
};

export const getAllposts = async (req, res) => {
  const username = req.query.user;
  const category = req.query.cat;

  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (category) {
      posts = await Post.find({
        categories: {
          $in: [category],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json({ info: posts });
  } catch (error) {
    res.status(500).json({ message: "Error getting the posts" });
  }
};
