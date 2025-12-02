import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ZodSafeParseResult } from 'zod';

import { ANY } from '../interfaces/types';
import { IssueStatusService } from '../services/issue-status.service';
import {
    UpdateIssueInputType,
    getIssuesQuerySchema,
} from '../validations/issue.validation';

export class IssueStatusController {

    public constructor(
        public __service: IssueStatusService,
    ) { }

    public get = async (req: Request, res: Response, next: NextFunction): Promise<RequestHandler> => {
        try {

            const { headers: { authorization }, query } = req;

            const validatingQueryParam: ZodSafeParseResult<UpdateIssueInputType> = getIssuesQuerySchema.safeParse(query);
            if (!validatingQueryParam.success) {
                throw validatingQueryParam.error!.issues;
            }

            const response: ANY = await this.__service.get(authorization);

            res.locals.data = { result: { data: response }, message_code: 'SUCCESS' };

            next();

            return undefined;

        } catch (error) {
            next(error);
        }
    }
}
