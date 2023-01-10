#!/usr/bin/env node
import treeСoincidences from './tree.js';
import readFilePath from '../parse1.js'
import bulidTree from '/src/bulidTree.js'

const gendiff = (filepath1, filepath2) => {
  const readFile = readFilePath(filepath1); //указываем путь где находится JSON файл
  const readFile2 = readFilePath(filepath2);
  const parse = JSON.parse(readFile);
  const parse2 = JSON.parse(readFile2);
  const result = treeСoincidences(parse, parse2);
  return JSON.stringify(result);
};

export { gendiff };
