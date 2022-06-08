export const loadEnv = () => {
  process.env.MONGO_USER = 'webhooks';
  process.env.MONGO_PASS = 'webhooks';
  process.env.MONGO_HOST = '127.0.0.1';
  process.env.MONGO_PORT = '27017';
  process.env.MONGO_DATABASE = 'webhooks';
  process.env.ACCESS_TOKEN_SECRET = 'secretissecret';
  process.env.GOOGLE_CLIENT_ID = 'google_client_id';
  process.env.GOOGLE_CLIENT_SECRET = 'goole_client_secret';
};
