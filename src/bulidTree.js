#!/usr/bin/env node
import _ from 'lodash';
import readFilePath from '../parse1.js';
import stylush from './formatters/stylish.js'

const collectDeepTree = (filepath1, filepath2) => {
   //console.log(filepath1, '-->fileapth')
   // console.log(readFilePath(filepath1), '-->fileapth')

 /* const parseJson1 = JSON.parse(readFile);
  const parseJson2 = JSON.parse(readFile2);*/

 //console.log(file1, 'file1')
 const readFile1 = readFilePath(filepath1);
 const readFile2 = readFilePath(filepath2);
 let file1 = _.cloneDeep(readFile1);
 let file2 = _.cloneDeep(readFile2);


function parsArr1(file1, file2) {
const file1Key1 = _.keys(file1) 
const file1Key2 = _.keys(file2) 
    const fileUnionKey = _.sortBy(_.union(file1Key1,file1Key2))
 //   console.log(file1)
 //  console.log(fileUnionKey, 'unionKey')
  const parsArr = fileUnionKey.map((key) => {
 //  console.log(JSON.stringify(file1[key] !== file2[key] && _.has(file2, key) === _.has(file1, key), null, '  '), _.has(file1, key), key, ' === ')
 //  console.log(file1[key] !== file2[key], file1[key] , file2[key])
 //   console.log(file1[key])
   // console.log(_.isObject(file1[key]) && _.isObject(file2[key] ), "----->_.isObject(file1[key]) && _.isObject(file2[key] )")
  // console.log(!_.isEqual(file1[key], file2[key]))
if (_.isObject(file1[key]) && _.isObject(file2[key] )) {
   // console.log(parsArr1(file1[key], file2[key]), 'file1')
 
// return  {[key] : file1[key] , type : 'nested' ,  children: parsArr1(file1[key], file2[key])}
//return  { key, state: 'nested', beforeValue: file1[key], afterValue: file2[key], children: parsArr1(file1[key], file2[key]),}

return { key, type: 'nested' , children : parsArr1(file1[key], file2[key])}
} 
if (file1[key] !== file2[key] && _.has(file2, key) === _.has(file1, key) ) {
  // console.log(file1[key] !== file2[key], _.has(file2, key) === _.has(file1, key), '----file1[key] !== file2[key]')
   return {key : key, type : 'changed', value1 : file1[key], key :key, value2 : file2[key]}
}

//console.log(key, 'key')
 if (_.has(file1, key) && file1[key] !== file2[key]) {
  //  key = file1[key]
   // console.log({[key] : file1[key]}, '--------f1')
    return { key : key, type : 'deleted', value1 : file1[key]}
} 
 if (_.has(file2, key) && file2[key] !== file1[key]) {

//  console.log(file2[key], file1[key], key, '!==')
    return { key: key, type: 'added', value2: file2[key]}
} 

return { key: key, type: 'unchanged', value1: file1[key] }
//console.log(_.isObject(file1[key]) === _.isObject(file2[key]))
 
  })
 //console.log(parsArr)
 return parsArr
}
//console.log(parsArr1(file1, file2))
//console.log(stylush(parsArr1(file1,file2)) )
return stylush(parsArr1(file1,file2)) 

//  return JSON.stringify(file3);
  }
 // console.log(collectDeepTree('/frontend-project-46/file3.json', '/frontend-project-46/file4.json'))

//collectDeepTree('__fixtures__/file3.json', '__fixtures__/file4.json')
//console.log(JSON.stringify(collectDeepTree('__fixtures__/file3.json', '__fixtures__/file4.json'), null, '  '))
//console.log(collectDeepTree('__fixtures__/file3.json', '__fixtures__/file4.json'))
//collectDeepTree('__fixtures__/file3.json', '__fixtures__/file4.json')
export default collectDeepTree;
