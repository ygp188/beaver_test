import express from 'express';
import { Beaver, Post, User } from '../../db/models';
import { checkUser } from '../middlewares';

const router = express.Router();

// beavers
router.post('/beavers/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Beaver.destroy({ where: { id } });
  res.sendStatus(200);
});

router.post('/beavers/addbeaver', async (req, res) => {
  const newBeaver = await Beaver.create(req.body);
  res.json(newBeaver);
});

// posts
router.post('/posts/addpost', async (req, res) => {
  const id = req.session.user?.id;
  const newPost = await Post.create({ ...req.body, user_id: id });
  const postWithUser = await Post.findByPk(newPost.id, { include: User });
  res.json(postWithUser);
});

router.get('/posts/delete/:id', checkUser, async (req, res) => {
  const { id } = req.params;
  try {
    await Post.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
});

export default router;
