 import {add } from './add'
 import { edit } from './edit'
 import { remove } from './remove'
 import { v4 as uuidv4 } from 'uuid';
 import { singleDocument } from '../../importSingleDocument';
const util = require('util')

describe.skip('MODIFY SUITE', () => {
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
    // console.log('TEST ADD RUNNING...',util.inspect(newState,{ depth: null }))
    expect('').toStrictEqual('');
  });
  it('2 Remove ', () => {
  //Create New Object
    const newState = remove(3)
    // console.log('TEST Remove Running....',util.inspect(newState,{ depth: null }))
    expect('').toStrictEqual('');
  });
  it('2 Edit ', () => {
  //Edit Existing Object
    const newState = edit('title','This title has been updated',1)
    console.log('TEST EDIT Running....',util.inspect(newState,{ depth: null }))
    expect('').toStrictEqual('');
  });
});
