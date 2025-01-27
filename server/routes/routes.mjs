import express from 'express';
import { handleGenerateNewShortURL, analytics,redirectURL } from '../controllers/controller.mjs';

const router = express.Router();

router.post('/', handleGenerateNewShortURL); 
router.get('/analytics/:shortId', analytics);
router.get('/:shortId',redirectURL)

export default router;
