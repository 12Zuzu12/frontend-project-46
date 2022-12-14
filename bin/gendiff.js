#!/usr/bin/env node

import { Command } from 'commander';
import { gendiff } from '../src/index.js'

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
    console.log(gendiff( filepath1, filepath2));
  });
 

 program.parse()
