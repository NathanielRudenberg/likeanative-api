import { promises as fs } from 'fs';
import { frontendRoot } from './env.js';

export default async function getFormants(language) {
  const filePath = `${frontendRoot}/public/audio/${language}/vowel_formants.json`;

  try {
    const data = await fs.readFile(filePath, 'utf8');
    const formants = JSON.parse(data);
    return formants
  } catch (err) {
    console.error('Error reading the formant file', err);
    return undefined;
  }
}
