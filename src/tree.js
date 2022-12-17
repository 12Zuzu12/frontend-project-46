#!/usr/bin/env node
import _ from 'lodash';

const treeСoincidences = (parse, parse2) => {
  let file1 = _.cloneDeep(parse)
  let file2 = _.cloneDeep(parse2)
  let file3 = {};
  const mapTree = _.keys(file1).sort().map((key) => {
    if (_.has(file2, key) && file1[key] === file2[key]) {
      file3[key] =  file1[key] 
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
 return file3;
};
export default treeСoincidences;