import { getMongoConnection } from '../../config/database';
import { MongoUserAccountModel } from '../../modules/user-management/persistence/models/MongoUserAccount';

export const clearMongoDb = async () => {
  await getMongoConnection();
  await MongoUserAccountModel.deleteMany({});
};
