import {
    issueRepository,
    issueStatusRepository,
} from '../repositories';

import { IssueService } from './issue.service';
import { IssueStatusService } from './issue-status.service';

export const issueService: IssueService = new IssueService(issueRepository, issueStatusRepository);
export const issueStatusService: IssueStatusService = new IssueStatusService(issueStatusRepository);
