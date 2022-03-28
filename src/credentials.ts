import { ICredentials } from './types';

const testCrededentials = {
  wsUserName: 'YKTEST',
  wsPassword: 'YK',
  userLanguage: 'TR',
  type: 'TEST',
  companyYKId: '123456789',
};

export const setAccount = (credentials: ICredentials) => {
  return Object.assign({}, testCrededentials, credentials);
};
