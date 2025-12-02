import { ANY } from '../interfaces/types';

import { issues } from './issues.model';
import { issueStatus } from './issue_status.model';

type ModelType = ANY;

export * from './issue_status.model';
export * from './issues.model';

export const models: ModelType = [
    issueStatus,
    issues,
];
