import { z, ZodSchema } from 'zod';

export interface IssueInputI {
  description?: string;
  status_id?: number;
  title?: string;
}

export interface GetIssueInputI {
  status_id?: number;
  title?: string;
}

export const createIssueSchema: ZodSchema<IssueInputI> = z.object({
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long' })
    .max(255, { message: 'Title cannot exceed 255 characters' }),

  description: z
    .string()
    .min(5, { message: 'Description must be at least 5 characters long' }),

  status_id: z
    .number({ message: 'Status ID must be a number' })
    .int({ message: 'Status ID must be an integer' })
    .positive({ message: 'Status ID must be positive' }),
});

export const updateIssueSchema: ZodSchema<IssueInputI> = z.object({
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long' })
    .max(255, { message: 'Title cannot exceed 255 characters' })
    .optional(),

  description: z
    .string()
    .min(5, { message: 'Description must be at least 5 characters long' })
    .optional(),

  status_id: z
    .number({ message: 'Status ID must be a number' })
    .int({ message: 'Status ID must be an integer' })
    .positive({ message: 'Status ID must be positive' })
    .optional(),
});

export const getIssuesQuerySchema: ZodSchema<GetIssueInputI> = z.object({
  status_id: z
    .string()
    .regex(/^\d+$/, { message: 'Status ID must be a positive integer' })
    .transform((val) => parseInt(val, 10))
    .optional(),

  title: z.string()
  .optional(),
});

export const issueIdParamSchema: ZodSchema<number|unknown> = z.object({
  id: z
    .string() // params come as strings
    .regex(/^\d+$/, { message: 'ID must be a positive integer' }),
});

export type IssueIdParamType = z.infer<typeof issueIdParamSchema>;
export type CreateIssueInputType = z.infer<typeof createIssueSchema>;
export type UpdateIssueInputType = z.infer<typeof updateIssueSchema>;
export type GetIssuesQueryType = z.infer<typeof getIssuesQuerySchema>;
