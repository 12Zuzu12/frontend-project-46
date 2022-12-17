#!/usr/bin/env node
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';
import { gendiff } from '../src/index.js'
import { examplModel } from '../__fixtures__/exampl.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
//console.log(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json')))

test('similar', () => {
    expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(examplModel());
  });
