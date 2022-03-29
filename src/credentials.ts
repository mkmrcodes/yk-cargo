import { ICredentials } from './types';

export const setAccount = (credentials: ICredentials) => {
  return Object.assign({}, credentials);
};
