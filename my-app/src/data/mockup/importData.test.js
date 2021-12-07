import {dbData} from './importData'
const util = require('util')


describe.only('import test', () => {
    it('1. View single docuemnts', () => {
     console.log(util.inspect(dbData,{ depth: null }))
      expect('').toStrictEqual('');
    });
   
  });