import express from 'express';
import { handleGenerateNewShortURL, analytics,redirectToURL } from '../controllers/controller.mjs';

const router = express.Router();

router.post('/', handleGenerateNewShortURL); 
router.get('/analytics/:shortId', analytics);
router.get('/:shortId',redirectToURL)

export default router;
