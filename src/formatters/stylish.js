#!/usr/bin/env node
import _ from 'lodash';
//import collectDeepTree from '../bulidTree.js'

//console.log(collectDeepTree('__fixtures__/file3.json', '__fixtures__/file4.json'))
const stringify = (value, depth, replacer = ' ') => {
  if (!_.isObject(value)) {
    return String(value);
  }
  const indentForKey = replacer.repeat(depth + 1);
  const bracketIdent = replacer.repeat(depth);
  const massiveValue = Object.entries(value);
  const lines = massiveValue.map(([key, valu]) => `${indentForKey}${key}: ${stringify(valu, depth + 1, replacer)}`);

  return ['{', ...lines, `${bracketIdent}}`].join('\n');
}

const stylish = (difference, replacer = '    ') => {
   // const resultObject = collectDeepTree('__fixtures__/file3.json', '__fixtures__/file4.json')
    const iterObject = (file, depth) => {
      const indent = replacer.repeat(depth);
      const identForSign = indent.slice(2);
      const operator = {
        added : '+',
        deleted : '-',
        unchanged : ' '
      }
        const map = file.map((obj) => {
         //   console.log(` + ${JSON.stringify(file[obj]['common'], null, '  ')}`, '----map')
          //  const type = file[obj].type
          const type = obj.type
          const key = obj.key
          const value1 = obj.value1
          const value2 = obj.value2
          const children = obj.children
            //console.log(value1)
           // console.log(type === 'added')
            if (type === 'nested') {
           //     console.log(obj['children'], ' ====== ')
                //return { [key] : iterObject(children) }
         
                return `${indent}${key}:${['{', ...iterObject(children, depth + 1), `${indent}}`].join('\n')}`;
            }
            if (type === 'added') {
             //  obj[` + ${key}`]
             //  console.log( obj[` + ${key}`],'======')
           //  key = `+ ${key}`
             //  return `${[key]} : ${value2}` 
             
               return `${identForSign}${operator.added} ${[key]}: ${stringify(value2, depth, replacer)}`;
            }
            if (type === 'deleted') {
           //   key = `- ${key}`
            //  return { [key] : value1}
           // return `${[key]} : ${value1}` 
          
            return `${identForSign}${operator.deleted} ${[key]}: ${stringify(value1, depth, replacer)}`;
            }
         //   console.log(type === 'changed', 'changed')
            if (type === 'changed') {
           //   console.log( { [key] : value1 , [key] : value2} , 'changed')
            //  return { [key] : value1 , [key] : value2}
          
              return [`${identForSign}${operator.deleted} ${[key]}: ${stringify(value1, depth, replacer)}`, `${identForSign}${operator.added} ${[key]}: ${stringify(value2, depth, replacer)}`].join('\n')
            }
            if (type === 'unchanged') {
             // return { [key] : value1 }
            // console.log(`${operator.unchanged}${[key]} : ${stringify(value1, depth + 1, replacer)}`, '======')
             return `${indent}${[key]}: ${stringify(value1, depth, replacer)}` 
            }

        })
    // console.log(JSON.stringify(map, null, ' '), 'mapmap')
  //  console.log(map, 'mapmap')
        return map
      }
      const stylishDiff = iterObject(difference, 1);

      return ['{', ...stylishDiff, '}'].join('\n');

       
    }

//console.log(JSON.stringify(stylish(), null, ' '))
//console.log(stylish(collectDeepTree()))
//stylish()
export default stylish