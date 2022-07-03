import express from 'express';
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blog.js';

const router = express.Router();

router.get('/', getBlogs);
router.post('/', createBlog);
router.patch('/:id', updateBlog);
router.delete('/:id', deleteBlog);

export default router;
