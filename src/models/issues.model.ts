import { AutoIncrement, BelongsTo, Column, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';

import { BaseAttributes, BaseModel } from './base.model';
import { issueStatus, issueStatusI } from './issue_status.model';

export interface issuesI extends BaseAttributes {
   description?: string;
   id?: number;
   status_id?: number;
   title?: string;
   status?: issueStatusI;
}

@Table({
   modelName: 'issues',
   tableName: 'issues',
   timestamps: true,
   paranoid: true,
   createdAt: 'created_at',
   updatedAt: 'updated_at',
   deletedAt: 'deleted_at',
})
export class issues extends BaseModel<issuesI> {

   @Column
   public description: string;

   @PrimaryKey
   @AutoIncrement
   @Column
   public id: number;

   @BelongsTo((): typeof issueStatus => issueStatus)
   public status: issueStatus;

   @ForeignKey((): typeof issueStatus => issueStatus)
   @Column
   public status_id: number;

   @Column
   public title: string;

}
