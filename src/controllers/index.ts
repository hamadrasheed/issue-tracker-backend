
import {
    issueService,
    issueStatusService,
} from '../services';

import { IssueController } from './issues.controller';
import { IssueStatusController } from './issues-status.controller';

export const issueController: IssueController = new IssueController(issueService);
export const issueStatusController: IssueStatusController = new IssueStatusController(issueStatusService);
