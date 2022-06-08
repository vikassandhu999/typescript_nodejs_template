import 'reflect-metadata';
import path from 'path';

require('dotenv').config({ path: path.resolve(process.cwd(), '.env.development') });

import { startExpressApp } from './modules/user-management/rest-api/ExpressApp';
import { MongoUserAccountRepo } from './modules/user-management/persistence/MongoUserAccountRepo';
import { container } from 'tsyringe';

container.register('UserAccountRepo', {
  useValue: new MongoUserAccountRepo(),
});

startExpressApp().then(() => {
  console.log('Server started');
});
