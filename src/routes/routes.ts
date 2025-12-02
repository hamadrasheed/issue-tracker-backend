import { Router } from 'express';

import { issueRouter } from './issue.routes';
import { issueStatusRouter } from './issue-status.routes';

export const routes: Router = Router();

routes.use('/issues', issueRouter);
routes.use('/issue-status', issueStatusRouter);
