import { Op } from 'sequelize';

export interface IssuesFilterWhereI {
  status_id?: number;
  title?: { [Op.like]: string } | string;
}
