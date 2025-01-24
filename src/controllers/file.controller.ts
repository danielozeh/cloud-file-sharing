import { Request, Response } from 'express';
import { generatePresignedUrl, getFileUrl } from '../services/s3.service';
import ResponseHandler from '../utils/response';

export const getPresignedUrl = async (req: Request, res: any) => {
  try {
    const { filename } = req.query;
    if (!filename) return res.status(400).json({ error: 'Filename is required' });

    const uploadUrl = await generatePresignedUrl(filename as string);

    console.log(`Presigned URL generated for ${filename}`);

    return ResponseHandler.sendSuccess(res, { message: 'Presigned URL generated', status_code: 200, data: { uploadUrl } });

  } catch (error) {
    console.error('Error generating presigned URL:', error);
    return ResponseHandler.internalServerError(res);
  }
};

export const viewFile = async (req: Request, res: any) => {
  try {
    const { filename } = req.params;
    if (!filename) return ResponseHandler.sendError(res, { message: 'Filename is required', status_code: 400 });

    const fileUrl = getFileUrl(filename);
    console.log(`File viewed: ${fileUrl}`);

    return ResponseHandler.sendSuccess(res, { message: 'File viewed', status_code: 200, data: { fileUrl } });
  } catch (error) {

    console.error('Error retrieving file:', error);
    return ResponseHandler.internalServerError(res);
  }
};