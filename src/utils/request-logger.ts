import { NextFunction, Request, RequestHandler, Response } from 'express';

import { statusCodes } from '../config/constant';

class RequestLoggerMiddleWare {

    public logger = async (req: Request, res: Response, next: NextFunction): Promise<RequestHandler> =>  {
        try {

            const { locals: { data: { result: resultData, status } } } = res;

            res.status(statusCodes.SUCCESS).json({
                status: status ? status : statusCodes.SUCCESS,
                result: { ...resultData },
            });

            return undefined;

        } catch (err) {
            next(err);
        }
    }

}

export const requestLoggerMiddleWare: RequestLoggerMiddleWare = new RequestLoggerMiddleWare();
