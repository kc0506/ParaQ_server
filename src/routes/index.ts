import { Router } from "express";
import ParasiteRouter from './Parasite';

const router = Router();
router.use('/parasites', ParasiteRouter);

export default router;