import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';

export const initMongoConnection = async () => {
  try {
    const user = getEnvVar('MONGODB_USER');
    const pwd = encodeURIComponent(getEnvVar('MONGODB_PASSWORD'));
    const url = getEnvVar('MONGODB_URL');
    const db = getEnvVar('MONGODB_DB');
    const uri = `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`;
    console.log('Connecting with URI:', uri);

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`,
    );

    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};
// mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0
