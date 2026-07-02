import fs from 'fs';
import path from 'path';

const sourceDir = path.join(process.cwd(), 'public', 'images');
const destDir = path.join(process.cwd(), 'dist', 'images');

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('Copying assets from public/images to dist/images...');
copyDirectory(sourceDir, destDir);
console.log('Assets copied successfully!');
