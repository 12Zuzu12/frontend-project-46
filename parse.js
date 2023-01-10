#!/usr/bin/env node
import fs from 'fs';// библиотека с помощью которой возможно работать с JSON
import path from 'path';
import yaml from 'js-yaml';
import _ from 'lodash';

function getPath(filepath) {
  return (path.resolve(process.cwd(), filepath));// указывает абсолютный путь до
};

const readFilePath = (filepath) => fs.readFileSync((getPath(filepath)),'utf-8');

const treeСoincidencesYaml = (parse, parse2) => {
const readFile = readFilePath(parse); //указываем путь где находится JSON файл
const readFile2 = readFilePath(parse2);
const parseYml = yaml.load(readFile);
const parseYml2 = yaml.load(readFile2);
  let file1 = _.cloneDeep(parseYml)
  let file2 = _.cloneDeep(parseYml2)
  let file3 = {};
  const mapTree = _.keys(file1).sort().map((key) => {
    if (_.has(file2, key) && file1[key] === file2[key]) {
      file3[key] = file1[key] 
    } else if (!_.has(file2, key) ) {
      file3[` - ${key}`] = file1[key]
    } else if (_.has(file2, key) && file2[key] !== file1[key]){
    file3[` - ${key}`] = file1[key]
    };
})
const mapTree2 = _.keys(file2).sort().map((key) => {
 // console.log(file3)
  if (!_.has(file3, key)) {
    if (!_.has(file1, key) ) {
          file3[` + ${key}`] = file2[key]
    } else if (_.has(file1, key) && file1[key] !== file2[key]){
      file3[` + ${key}`] = file2[key]
      }
  }
  })
  return JSON.stringify(file3);
};

export default treeСoincidencesYaml;

