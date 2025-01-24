import express from 'express';
import { getPresignedUrl, viewFile } from '../controllers/file.controller';
import { apiKeyAuth } from '../middleware/apiKeyAuth';

const router = express.Router();

router.get('/presigned-url', apiKeyAuth, getPresignedUrl);
router.get('/view/:filename', viewFile);

export default router;
