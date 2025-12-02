import { CodeResponsesI } from '../interfaces';
import { statusCodes } from './constant';

export const responses: CodeResponsesI = {
    en: {
        SUCCESS: {
            message: 'success',
            status: statusCodes.SUCCESS,
        },
        INTERNAL_SERVER_ERROR: {
            message: 'Internal server error',
            status: statusCodes.ERROR,
        },
        NO_RECORD_FOUND: {
            message: 'No record exists in the system.',
            status: statusCodes.ERROR,
        },
        INVALID_STATUS_ID: {
            message: 'Invalid status id.',
            status: statusCodes.ERROR,
        },
        UNKNOWN_QUERY_PARAMS: {
            message: 'Unrecognized query params',
            status: statusCodes.ERROR,
        },
    },

};
