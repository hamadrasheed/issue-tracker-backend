import { NextFunction, Request, RequestHandler, Response, Router } from 'express';

import {  issueStatusController} from '../controllers';
import { requestLoggerMiddleWare } from '../utils/request-logger';

export const issueStatusRouter: Router = Router();

/**
 * GET routes
 */
issueStatusRouter.get('/', (...args: [Request, Response, NextFunction]): Promise<RequestHandler> => issueStatusController.get(...args), requestLoggerMiddleWare.logger);

/**
 * POST routes
 */

/**
 * PATCH routes
 */

/**
 * DELETE routes
 */

