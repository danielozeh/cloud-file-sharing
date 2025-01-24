import { Request, Response, NextFunction } from 'express';
import { config } from '../config';
import ResponseHandler from '../utils/response';

export const apiKeyAuth = (req: Request, res: any, next: NextFunction) => {
  const providedKey = req.header('x-api-key');
  console.log(providedKey);
  console.log(config.apiKey);
  if (!providedKey || providedKey !== config.apiKey) {
    return ResponseHandler.sendError(res, { message: 'Unauthorized access', status_code: 403 });
  }
  next();
};
