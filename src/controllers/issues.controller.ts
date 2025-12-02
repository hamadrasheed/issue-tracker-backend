import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ZodSafeParseResult } from 'zod';

import { ANY } from '../interfaces/types';
import { IssueService } from '../services/issue.service';
import {
    CreateIssueInputType,
    createIssueSchema,
    issueIdParamSchema,
    updateIssueSchema,
    IssueIdParamType,
    UpdateIssueInputType,
    getIssuesQuerySchema,
} from '../validations/issue.validation';

export class IssueController {

    public constructor(
        public __service: IssueService,
    ) { }

    public create = async (req: Request, res: Response, next: NextFunction): Promise<RequestHandler> => {
        try {

            const { headers: { authorization }, body } = req;

            const validation: ZodSafeParseResult<CreateIssueInputType> = createIssueSchema.safeParse(body);
            if (!validation.success) {
                throw validation.error!.issues;
            }

            const response: ANY = await this.__service.create(body, authorization);

            res.locals.data = { result: { data: response }, message_code: 'SUCCESS' };

            next();

            return undefined;

        } catch (error) {
            next(error);
        }
    }

    public delete = async (req: Request, res: Response, next: NextFunction): Promise<RequestHandler> => {
        try {

            const { headers: { authorization }, params } = req;

            // Validating Query Param id
            const validatedParam: ZodSafeParseResult<IssueIdParamType> = issueIdParamSchema.safeParse(params);
            if (!validatedParam.success) {
                throw validatedParam.error!.issues;
            }

            const response: ANY = await this.__service.delete(+params.id, authorization);

            res.locals.data = { result: { data: response }, message_code: 'SUCCESS' };

            next();

            return undefined;

        } catch (error) {
            next(error);
        }
    }

    public get = async (req: Request, res: Response, next: NextFunction): Promise<RequestHandler> => {
        try {

            const { headers: { authorization }, query } = req;

            const validatingQueryParam: ZodSafeParseResult<UpdateIssueInputType> = getIssuesQuerySchema.safeParse(query);
            if (!validatingQueryParam.success) {
                throw validatingQueryParam.error!.issues;
            }

            const response: ANY = await this.__service.get(query, authorization);

            res.locals.data = { result: { data: response }, message_code: 'SUCCESS' };

            next();

            return undefined;

        } catch (error) {
            next(error);
        }
    }

    public getSingle = async (req: Request, res: Response, next: NextFunction): Promise<RequestHandler> => {
        try {

            const { headers: { authorization }, params } = req;

            // Validating Query Param id
            const validatedParam: ZodSafeParseResult<IssueIdParamType> = issueIdParamSchema.safeParse(params);
            if (!validatedParam.success) {
                throw validatedParam.error!.issues;
            }

            const response: ANY = await this.__service.getSingleIssue(+params.id, authorization);

            res.locals.data = { result: { data: response }, message_code: 'SUCCESS' };

            next();

            return undefined;

        } catch (error) {
            next(error);
        }
    }

    public update = async (req: Request, res: Response, next: NextFunction): Promise<RequestHandler> => {
        try {

            const { headers: { authorization }, body, params } = req;

            console.log('body',body);

            // Validating Query Param id
            const validatedParam: ZodSafeParseResult<IssueIdParamType> = issueIdParamSchema.safeParse(params);
            if (!validatedParam.success) {
                throw validatedParam.error!.issues;
            }
            // Validating Body
            const validationBody: ZodSafeParseResult<UpdateIssueInputType> = updateIssueSchema.safeParse(body);
            if (!validationBody.success) {
                throw validationBody.error!.issues;
            }
            console.log('bod', body);
            const response: ANY = await this.__service.update(+params.id, body, authorization);

            res.locals.data = { result: { data: response }, message_code: 'SUCCESS' };

            next();

            return undefined;

        } catch (error) {
            next(error);
        }
    }
}
