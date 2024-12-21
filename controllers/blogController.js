import { Blog } from "../models/blog.model.js";

export const addpost = async (req, res) => {
  const post = req.body;
  const newPost = new Blog(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const allpost = async (req, res) => {
  try {
    const posts = await Blog.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletepost = async (req, res) => {
  try {
    await Blog.deleteOne({ _id: req.params.id });
    res.status(204).json({ message: "Blog post deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatepost = async (req, res) => {
  try {
    let post = req.body;
    const { _id, ...updateData } = post;
    await Blog.updateOne({ _id: req.params.id }, updateData);
    res.status(200).json(updateData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const searchPosts = async (req, res) => {
  const searchTerm = req.query.term || "";
  try {
    const post = await Blog.find({
      $or: [
        { title: { $regex: searchTerm, $options: "i" } },
        { content: { $regex: searchTerm, $options: "i" } },
        { category: { $regex: searchTerm, $options: "i" } },
      ],
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getpost = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
