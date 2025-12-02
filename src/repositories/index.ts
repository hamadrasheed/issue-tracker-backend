import {
    issues,
    issueStatus,
} from '../models';

import { IssueRepository } from './issue.repository';
import { IssueStatusRepository } from './issue-status.repository';

export const issueRepository: IssueRepository = new IssueRepository(issues);
export const issueStatusRepository: IssueStatusRepository = new IssueStatusRepository(issueStatus);
