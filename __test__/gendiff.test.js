#!/usr/bin/env node
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path from 'path';
import { dirname } from 'path';
import { gendiff } from '../src/index.js'
import { examplModel } from '../__fixtures__/exampl.js'
import treeСoincidencesYaml from '../parse.js';
import bulidTree from '../src/bulidTree.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
//console.log(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json')))
const readFile = (filename) => readFileSync((getFixturePath(filename)), 'utf8');
const expectdJson = readFile('compareJSON.txt');
console.log(expectdJson)
test('similar', () => {
   // expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(examplModel());
   // expect(treeСoincidencesYaml(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'))).toEqual(examplModel());
    expect(bulidTree(getFixturePath('file3.json'), getFixturePath('file4.json'))).toEqual(expectdJson);
  });