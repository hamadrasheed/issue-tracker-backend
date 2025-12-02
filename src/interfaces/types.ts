import * as Sequelize from 'sequelize';

export type SequelizeTransaction = Sequelize.Transaction;

export interface Paginate {
    page?: number;
    paginate?: number;
}

export interface GeneralResponseDataI<I> {
    data: unknown[] | I;
    total?: number;
}

export interface GeneralApiResponseI<I> {
    message: string;
    result: GeneralResponseDataI<I>;
    status: boolean;
}

// tslint:disable-next-line: no-any
export type ANY = any;

export interface Filter {
    /** Where clause */
    [key: string]: ANY;
}

export interface Where {
    [key: string]: ANY;
}

export interface Options {
    [key: string]: ANY;
}

export interface Paginate {
    page?: number;
    paginate?: number;
}

interface AuthorizationI {
    Authorization: string;
    'user-id': string;
}

export interface GenericQueryParamsI { [key: string ]: number | string | null | undefined | [string | number] ; }

export interface GenericHeadersI {
    [key: string]: ANY;
    headers?: AuthorizationI;
    params?: GenericQueryParamsI;
}

export type GenericReqObjI = ANY;

export interface GeneralResponseDataI<I> {
    data: unknown[] | I;
    total?: number;
}

export interface GeneralApiResponseI<I> {
    message: string;
    result: GeneralResponseDataI<I>;
    status: boolean;
}

export interface AuthI {
    authorization?: string;
    'user-id'?: string;
    userId?: number;
}

interface ResponseDetail {
  message: string;
  status: number;
}

interface LanguageResponses {
  [key: string]: ResponseDetail;
}

export interface CodeResponsesI {
  [languageCode: string]: LanguageResponses;
}

interface PoolSettings {
  acquire: number;
  evict: number;
  idle: number;
  max: number;
}

export interface PoolConfig {
  development: PoolSettings;
  qa: PoolSettings;
  staging: PoolSettings;
  production: PoolSettings;
}