import fs from 'fs';
import path from 'path';

export default function saveFile(name: string, data: string | Buffer) {
  fs.writeFileSync(path.resolve(`./musics/${name}`), data);
}
