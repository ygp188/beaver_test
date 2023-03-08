import express from 'express';
import { Beaver } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const beavers = await Beaver.findAll({ order: [['updatedAt', 'DESC']] });
  const initState = { beavers };
  res.render('Layout', initState);
});

export default router;
