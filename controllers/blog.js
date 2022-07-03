import mongoose from 'mongoose';
import Blog from '../models/blog.js';

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ userId: req.userId });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  const blog = req.body;
  console.log(blog);
  const newBlog = new Blog({ ...blog });
  try {
    await newBlog.save();
    res.status(200).json(newBlog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  const id = req.params.id;
  const blog = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No blog with that id');
  const updateBlog = await Blog.findByIdAndUpdate(id, blog, {
    new: true,
  });
  res.status(200).json(updateBlog);
};

export const deleteBlog = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No blog with that id');
  await Blog.findByIdAndRemove(id);
  res.status(200).json({ message: 'Blog data deleted successfully' });
};
