require('dotenv').config({ path: './.env' });

export const PORT = process.env.PORT;
export const MONGODB_URI = process.env.MONGO_URL;
