import { copyFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = path.join(projectRoot, 'dist');
const deployFiles = [
  'index.html',
  'style.css',
  'tailwind.css',
  'Gemini_Generated_Image_dx7lrtdx7lrtdx7l.jpg',
  'WhatsApp Image 2026-10-29 at 10.53.22 PM.jpeg',
  'WhatsApp Image 2026-10-29 at 11.22.24 PM.jpeg',
  'WhatsApp Video 2026-10-30 at 10.23.10 AM.mp4'
];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const file of deployFiles) {
  await copyFile(path.join(projectRoot, file), path.join(outputDirectory, file));
}
