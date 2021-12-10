 import {add, modify } from './modify'
 import { v4 as uuidv4 } from 'uuid';
 import { singleDocument } from '../../importSingleDocument';

 const util = require('util')

const newComp = new singleDocument.newComponent(
  1,                              //parent_id
  uuidv4(),                        //new id for component
  'http://www.paulayling.me',     //url
  'The best website',             //title
  'https://pbs.twimg.com/media/DmAdG5qU0AAEnZU?format=jpg&name=small',  //image url
  'short notes',                  //notes
  ['bikes','transport']);         //tags


describe.only('MODIFY SUITE', () => {
  it('1 Add ', () => {
    // console.log(util.inspect(contextMock,{ depth: null }))
    add(1,newComp)
    expect('').toStrictEqual('');
  });
});
