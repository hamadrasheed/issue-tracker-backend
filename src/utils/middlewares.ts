import * as dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';

import { statusCodes } from '../config/constant';
import { ANY } from '../interfaces';

dotenv.config({ path: '../.env' });

export const errorHandler: (error: ANY, _req: Request, res: Response, _next: NextFunction) => ANY = async (error: ANY, _req: Request, res: Response, _next: NextFunction): Promise<ANY> => {

    const { body, query, headers, method, originalUrl } = _req;

    console.log('error in errorHandler', error);

    if (error?.errors && Array.isArray(error?.errors)) {

        return res.status(statusCodes.ERROR).json({
            message: error.errors[0],
            errors: process.env.NODE_ENVR === 'production' ? null : error.errors,
        });
    }

    return res.status(error.status || statusCodes.ERROR).json({
        message: error.message || error.name || error,
        errors: process.env.NODE_ENVR === 'production' ? null : error.errors,
    });

};

