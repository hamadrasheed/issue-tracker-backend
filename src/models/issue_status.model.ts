import { AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';

import { BaseAttributes, BaseModel } from './base.model';

export interface issueStatusI extends BaseAttributes  {
    id: number;
    name: string;
    slug: string;
}

@Table({
    modelName: 'issue_status',
    tableName: 'issue_status',
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
})
export class issueStatus extends BaseModel<issueStatusI> {

    @PrimaryKey
    @AutoIncrement
    @Column
    public id: number;

    @Column({ unique: true })
    public name: string;

    @Column({ unique: true })
    public slug: string;

}
