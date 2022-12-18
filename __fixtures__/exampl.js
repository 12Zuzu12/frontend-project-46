#!/usr/bin/env node
const examplModel = () => {
      return JSON.stringify( {
        ' - follow': false,
          'host': 'hexlet.io',
        ' - proxy': '123.234.53.22',
        ' - timeout': 50,
        ' + timeout': 20,
        ' + verbose': true,
      })
}
examplModel()
export { examplModel };