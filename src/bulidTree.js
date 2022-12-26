#!/usr/bin/env node
import _ from 'lodash';
import readFilePath from '../parse1.js';


const collectDeepTree = (filepath1, filepath2) => {
    console.log(filepath1, '-->fileapth')
   // console.log(readFilePath(filepath1), '-->fileapth')
 const readFile1 = readFilePath(filepath1);
  const readFile2 = readFilePath(filepath2);
 /* const parseJson1 = JSON.parse(readFile);
  const parseJson2 = JSON.parse(readFile2);*/
  let file1 = _.cloneDeep(readFile1);
  let file2 = _.cloneDeep(readFile2);
 //console.log(file1, 'file1')

function parsArr1(file1, file2) {
const file1Key1 = _.keys(file1) 
  const file1Key2 = _.keys(file2) 
    const fileUnionKey = _.sortBy(_.union(file1Key1,file1Key2))
  const parsArr = fileUnionKey.map((key) => {
   
if (_.has(file1, key)) {
    file1 = `- ${key}`
    console.log(file1, 'file1')
return   file1 = `- ${key}`
   
} else if (_.has(file2, key)){
    file2 = `+ ${key}`
    console.log(file2, 'file2')
    return file2 = `+ ${key}`

} else if (_.isObject(file1[key]) && _.isObject(file2[key] )) {
    console.log(parsArr1(file1[key], file2[key]), 'file1')
 return parsArr1(file1[key], file2[key])

}
//console.log(_.isObject(file1[key]) === _.isObject(file2[key]))
 
  })
  console.log(parsArr)
}
//console.log(parsArr(file1Key1,file1Key2))
console.log(parsArr1(file1, file2))

//  return JSON.stringify(file3);
  }
 // console.log(collectDeepTree('/frontend-project-46/file3.json', '/frontend-project-46/file4.json'))

collectDeepTree('__fixtures__/file3.json', '__fixtures__/file4.json')


export default collectDeepTree;
