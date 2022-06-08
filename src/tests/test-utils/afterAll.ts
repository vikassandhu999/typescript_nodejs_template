import mongoose from 'mongoose';

export const afterAllDown = async () => {
  await mongoose.connection?.close();
};
