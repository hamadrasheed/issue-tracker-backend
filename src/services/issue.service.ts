import * as typings from '../interfaces';
import * as models from '../models';
import * as repositories from '../repositories';
import { Helper } from '../shared';
import { generateMessages } from '../utils';
import { CreateIssueInputType, GetIssuesQueryType, UpdateIssueInputType } from '../validations/issue.validation';
import { Op } from 'sequelize';

export class IssueService extends Helper {

    public constructor(
        public __issueRepo: typeof repositories.issueRepository,
        public __issueStatusRepo: typeof repositories.issueStatusRepository,
    ) {
        super();
    }

    public create = async (data: CreateIssueInputType, _authorization: string): Promise<models.issuesI> => {

        try {

            const {
                description,
                status_id,
                title,
            } = data;

            // validating status id
            await this.validateIssueStatus(status_id);

            const newlyCreatedIssue: models.issuesI = await this.__issueRepo.create({
                description,
                status_id,
                title,
            });

            return this.validateAndReturnIssue(newlyCreatedIssue.id, ['id', 'status_id', 'title', 'description'], true);

        } catch (error) {
            throw error;
        }
    }

    public delete = async (id: number, _authorization: string): Promise<void> => {

        try {

            // validate if issue sent is valid
            await this.validateAndReturnIssue(id);
            await this.__issueRepo.destroy(id);

            return null;

        } catch (error) {
            throw error;
        }
    }

    public get = async (data: GetIssuesQueryType, _authorization: string): Promise<models.issuesI[]> => {

        try {

            const {
                status_id,
                title,
            } = data;

            const dynamicWhereClause: typings.IssuesFilterWhereI = {};

            if (status_id) {
                dynamicWhereClause.status_id = status_id;
            }

            if (title?.length) {
                dynamicWhereClause.title = {[Op.like]: `%${title}%`};
            }

            return this.__issueRepo.findAll(
                {
                    ...dynamicWhereClause,
                },
                {
                    attributes: ['id', 'status_id', 'title', 'description', 'updated_at'],
                    include: {
                        model: models.issueStatus,
                        attributes: ['name', 'slug'],
                        required: true,
                    },
                    order: [['id', 'DESC']],
                },
            );

        } catch (error) {
            throw error;
        }
    }

    public getSingleIssue = async (id: number, _authorization: string): Promise<models.issuesI> => {

        try {

            return this.validateAndReturnIssue(id, ['id', 'status_id', 'title', 'description', 'updated_at', 'created_at'], true);

        } catch (error) {
            throw error;
        }
    }

    public update = async (id: number, data: UpdateIssueInputType, _authorization: string): Promise<models.issuesI> => {

        try {

            const {
                description,
                status_id,
                title,
            } = data;

            // validate if issue sent is valid
            await this.validateAndReturnIssue(id);

            const updateClause: models.issuesI = {};

            // validating status id
            if (status_id) {
                await this.validateIssueStatus(status_id);
                updateClause.status_id = status_id;
            }

            if (description) updateClause.description = description;
            if (title) updateClause.title = title;

            await this.__issueRepo.update(id, {
                ...updateClause,
            });

            return this.validateAndReturnIssue(id, ['id', 'status_id', 'title', 'description'], true);

        } catch (error) {
            throw error;
        }
    }

    // validate if status id being sent from client is valid
    private validateIssueStatus = async (id: number): Promise<boolean> => {
        try {

            const validStatus: models.issueStatusI = await this.__issueStatusRepo.findById(id, { attributes: ['id'] });
            if (!validStatus) {
                throw generateMessages('INVALID_STATUS_ID');
            }

            return true;
        } catch (error) {
            throw error;
        }
    }

    // validate if issue id being sent from client is valid
    private validateAndReturnIssue = async (id: number, requiredColumn: string[] = ['id'], statusRequired = false): Promise<models.issuesI> => {
        try {

            const validStatus: models.issuesI = await this.__issueRepo.findById(id, {
                attributes: requiredColumn,
                ...(statusRequired ? {
                        include: {
                            model: models.issueStatus,
                            attributes: ['name', 'slug'],
                            required: true,
                        },
                    } : {}),
            });

            if (!validStatus) {
                throw generateMessages('NO_RECORD_FOUND');
            }

            return validStatus;
        } catch (error) {
            throw error;
        }
    }


}
