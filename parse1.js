//import { constants } from 'buffer';
import fs from 'fs';
import path from 'path';

function getPath(filepath) {
  return (path.resolve(process.cwd(), filepath));// указывает абсолютный путь до
}
const readFilePath = (filepath) => fs.readFileSync(getPath(filepath), 'utf-8');

const extension = (filepath) => {
  const readfile = readFilePath(filepath)
 // console.log(path.extname(getPath(filepath)) === '.json', '-->res')
 if (path.extname(getPath(filepath)) === '.json') {
//  console.log(JSON.parse(readfile))
   return JSON.parse(readfile);
 }else if (path.extname(getPath(filepath)) === '.yaml') {
   return yaml.load(readfile);
}
}

export default extension;
