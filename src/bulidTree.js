#!/usr/bin/env node

import _ from 'lodash';
import readFilePath from '../parse1.js'



const collectDeepTree = (filepath1, filepath2) =>{
  const readFile = readFilePath(filepath1); //указываем путь где находится JSON файл
  const readFile2 = readFilePath(filepath2);
  const parseJson1 = JSON.parse(readFile);
  const parseJson2 = JSON.parse(readFile2);
 // console.log(parseJson1)

  let file1 = _.cloneDeep(parseJson1)
  let file2 = _.cloneDeep(parseJson2)
  let file3 = {};
  const mapTree = _.keys(file1).map((key) => {
      //  console.log(key, '---> key')
      //  console.log(_.isObject(file1[key]) && _.isObject(file2[key]), '---> _.isObject(file1[key]) && _.isObject(file2[key])')
      
      if (_.has(file2, key) && file1[key] === file2[key]) {
        file3[key] = file1[key] 
      //  console.log(file3, '---> file3')
      } else if (!_.has(file2, key) ) {
        file3[` - ${key}`] = file1[key]
      //  console.log(file3, '---> file3')
      } else if (_.has(file2, key) && file2[key] !== file1[key]){
      file3[` - ${key}`] = file1[key]
     // console.log(file3, '---> file3')
      }else if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      
      collectDeepTree(file1[key], file2[key])
   //    console.log(file1[key], 'file1 key')
      }
  })
  const mapTree2 = _.keys(file2).map((key) => {
    console.log(file3)
    if (!_.has(file3, key)) {
      if (!_.has(file1, key) ) {
            file3[` + ${key}`] = file2[key]
      } else if (_.has(file1, key) && file1[key] !== file2[key]){
        file3[` + ${key}`] = file2[key]
        }
        if (_.isObject(file3[key]) && _.isObject(file1[key])) {
            // console.log()
          file3 =  collectDeepTree(file2[key])
            
           }
    }
    })
   console.log(file3)
 
    return JSON.stringify(file3);
   
  }
 // console.log(collectDeepTree('/frontend-project-46/file3.json', '/frontend-project-46/file4.json'))
 // collectDeepTree('__fixtures__/file3.json', '__fixtures__/file4.json')
 collectDeepTree(default, default)
export default collectDeepTree;
