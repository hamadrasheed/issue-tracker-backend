import { NextFunction, Request, RequestHandler, Response, Router } from 'express';

import { issueController } from '../controllers';
import { requestLoggerMiddleWare } from '../utils/request-logger';

export const issueRouter: Router = Router();

/**
 * GET routes
 */
issueRouter.get('/:id', (...args: [Request, Response, NextFunction]): Promise<RequestHandler> => issueController.getSingle(...args), requestLoggerMiddleWare.logger);
issueRouter.get('/', (...args: [Request, Response, NextFunction]): Promise<RequestHandler> => issueController.get(...args), requestLoggerMiddleWare.logger);

/**
 * POST routes
 */
issueRouter.post('/', (...args: [Request, Response, NextFunction]): Promise<RequestHandler> => issueController.create(...args), requestLoggerMiddleWare.logger);

/**
 * PATCH routes
 */
issueRouter.patch('/:id', (...args: [Request, Response, NextFunction]): Promise<RequestHandler> => issueController.update(...args), requestLoggerMiddleWare.logger);

/**
 * DELETE routes
 */
issueRouter.delete('/:id', (...args: [Request, Response, NextFunction]): Promise<RequestHandler> => issueController.delete(...args), requestLoggerMiddleWare.logger);

