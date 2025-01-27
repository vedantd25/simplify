import express from 'express';
import { handleGenerateNewShortURL, analytics } from '../controllers/controller.mjs';

const router = express.Router();

router.post('/', handleGenerateNewShortURL); // Used to update data in db
router.get('/analytics/:shortId', analytics);

export default router;
