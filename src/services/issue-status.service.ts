import * as models from '../models';
import * as repositories from '../repositories';
import { Helper } from '../shared';

export class IssueStatusService extends Helper {

    public constructor(
        public __issueStatusRepo: typeof repositories.issueStatusRepository,
    ) {
        super();
    }

    public get = async (_authorization: string): Promise<models.issueStatusI[]> => {

        try {

            return this.__issueStatusRepo.findAll({});

        } catch (error) {
            throw error;
        }
    }

}
