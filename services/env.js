import dotenv from 'dotenv';

dotenv.config();

const frontendRoot = process.env.FRONTEND_ROOT;
const port = process.env.PORT;
const audioDir = process.env.AUDIO_DIR;

export {
  frontendRoot, port, audioDir
};
