import dotenv from 'dotenv';

dotenv.config();

const frontendRoot = process.env.FRONTEND_ROOT;
const port = process.env.PORT;

export {
  frontendRoot, port
};
