import * as models from '../models';
import { BaseRepository } from '../shared/base-repository';

export class IssueStatusRepository extends BaseRepository<models.issueStatus> {

    public constructor(protected _issueStatus: typeof models.issueStatus) {
        super(_issueStatus);
    }

}
