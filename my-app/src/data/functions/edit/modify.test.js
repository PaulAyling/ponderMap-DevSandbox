 import {add, modify } from './modify'
 import { v4 as uuidv4 } from 'uuid';
 import { singleDocument } from '../../importSingleDocument';


const util = require('util')

describe.only('MODIFY SUITE', () => {
  it('1 Add ', () => {
  //Create New Object
  const newComp = new singleDocument.newComponent(
    1,                              //parent_id
    uuidv4(),                        //new id for component
    'http://www.paulayling.me',     //url
    'The best website',             //title
    'https://pbs.twimg.com/media/DmAdG5qU0AAEnZU?format=jpg&name=small',  //image url
    'short notes',                  //notes
    ['bikes','transport']);         //tags
    const newState = add(1,newComp)
    console.log('newState',util.inspect(newState,{ depth: null }))
    expect('').toStrictEqual('');
  });
});
