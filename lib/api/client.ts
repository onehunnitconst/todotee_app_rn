import {Axios} from 'axios';
import Constants from '../constants';

export const client = new Axios({baseURL: Constants.apiRoute});
