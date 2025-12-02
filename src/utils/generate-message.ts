import * as dotenv from 'dotenv';

import { responses } from '../config/codes';

dotenv.config({ path: '../.env' });

export const generateMessages = (code: string) => responses[`${process.env.ENV_LANG}`][`${code}`];
