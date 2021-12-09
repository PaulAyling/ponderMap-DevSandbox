<<<<<<< HEAD
import {single_document} from '../edit/modify'
import {add,remove,edit} from '../dataFunctions/modify'
=======
 
import {modify } from './modify'
>>>>>>> main


describe.only('MODIFY SUITE', () => {
  it('1 edit ', () => {
    console.log(add())
    edit('Motorbikes','title',1,1,allComponents)
    expect('').toStrictEqual('');
  });
});
