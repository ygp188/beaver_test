import express from 'express';
import { Post, User } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await Post.findAll({ include: User });
  const initState = { posts };
  res.render('Layout', initState);
});

export default router;
