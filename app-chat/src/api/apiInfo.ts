import {ApiName} from "./api";

export enum Methods {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT'
}
export const host = process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : '';

export type TypeAPI = {[id in ApiName]: {method: string; url: string}}