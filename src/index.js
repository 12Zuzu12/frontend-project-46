#!/usr/bin/env node
import fs from 'fs';// библиотека с помощью которой возможно работать с JSON
import path from 'path';
import treeСoincidences from './tree.js';

function getPath(filepath) {
  return (path.resolve(process.cwd(), filepath));// указывает абсолютный путь до
}
const readFilePath = (filepath) => fs.readFileSync((getPath(filepath)),'utf-8');
const gendiff = (filepath1, filepath2) => {
  const readFile = readFilePath(filepath1); //указываем путь где находится JSON файл
  const readFile2 = readFilePath(filepath2);
  const parse = JSON.parse(readFile);
  const parse2 = JSON.parse(readFile2);
  const result = treeСoincidences(parse, parse2);
  //console.log(typeof JSON.stringify(result))
  
  return JSON.stringify(result);
};

export { gendiff };