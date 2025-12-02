import {
  Column,
  CreatedAt,
  DeletedAt,
  Model,
  UpdatedAt,
} from 'sequelize-typescript';

export interface BaseAttributes {
  created_at?: Date;
  deleted_at?: Date;
  updated_at?: Date;
}

export abstract class BaseModel<T> extends Model<T> {

  @CreatedAt
  @Column
  public created_at: Date;

  @DeletedAt
  @Column
  public deleted_at: Date;

  @UpdatedAt
  @Column
  public updated_at: Date;

}