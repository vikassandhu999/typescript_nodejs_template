import mongoose from 'mongoose';

const getMongoConnection = () => {
  const config = {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
    host: process.env.MONGO_HOST,
    port: Number.parseInt(process.env.MONGO_PORT as string),
    database: process.env.MONGO_DATABASE,
  };

  const MONGO_CONN_STRING =
    `mongodb://${config.user}:${config.pass}@` + `${config.host}:${config.port}/${config.database}`;

  return mongoose.connect(MONGO_CONN_STRING);
};

export { getMongoConnection };
