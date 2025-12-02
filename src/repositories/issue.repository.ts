import * as models from '../models';
import { BaseRepository } from '../shared/base-repository';

export class IssueRepository extends BaseRepository<models.issues> {

    public constructor(protected _issue: typeof models.issues) {
        super(_issue);
    }

}
