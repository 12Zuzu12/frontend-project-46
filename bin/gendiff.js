#!/usr/bin/env node

import { Command } from 'commander';
//import { gendiff } from '../src/index.js';
import path from 'path';
import treeĞ¡oincidencesYaml from '../parse.js';
import collectDeepTree from '../src/bulidTree.js'
import readFilePath from '../parse1.js';



const program = new Command();

program
 .name('gendiff')
 .arguments('<filepath1>')
 .arguments('<filepath2>')
 .description('Compares two configuration files and shows a difference.')
 .version('0.8.0')
 .helpOption('-h, --help', 'output usage information')
 .option('-f, --format <type>', 'output format')
 .action((filepath1, filepath2) => {
  if (path.extname(filepath1) === '.json') {
  // console.log(gendiff(filepath1, filepath2));
   console.log(collectDeepTree(filepath1, filepath2));
    
 }else if (path.extname(filepath1) === '.yaml'){
   //console.log(treeĞ¡oincidencesYaml(filepath1, filepath2));
 }
});

 program.parse()
