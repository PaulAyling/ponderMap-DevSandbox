import { allComponents } from '../mockup/allComponents'
import { documentViews } from '../mockup/documentViews'
import {add,remove,edit} from '../dataFunctions/modify'


describe.only('MODIFY SUITE', () => {
  it('1 edit ', () => {
    
    edit('Motorbikes','title',1,1,allComponents)



    expect('').toStrictEqual('');
  });
});
