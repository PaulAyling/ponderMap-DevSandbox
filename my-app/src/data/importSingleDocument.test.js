import {single_document} from './importSingleDocument'
const util = require('util')


describe.only('import test', () => {
    it('1. View single docuemnts', () => {
     console.log(util.inspect(single_document,{ depth: null }))
      expect('').toStrictEqual('');
    });
   
  });