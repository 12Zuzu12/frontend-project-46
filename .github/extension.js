#!/usr/bin/env node
import path from 'path';
import yaml from 'js-yaml';
//import readFilePath from './parse1.js';

// eslint-disable-next-line consistent-return
const extension = (filepath) => {
   // console.log(path.extname(filepath).slice(1) === '.json') 
  if (path.extname(filepath).slice(1,0) === '.json') {
    return JSON.parse(filepath);
  }
  if (path.extname(filepath) === '.yaml') {
    return yaml.load(filepath);
}
}
//console.log( extension(readFilePath('__fixtures__/file3.json')))
export default extension;
