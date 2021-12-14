import { single_document } from '../../../data/importSingleDocument';
import { getComponent, getChildrenIds} from './display'
const util = require('util')


describe.only('Test', () => {
    it('1. getComponent', () => {
        const curComponent = getComponent(1)
        //console.log('1. TEST getComponet:',util.inspect(curComponent,{ depth: null }))
        expect('').toStrictEqual('');
    });
    it('2. getChildrenIds', () => {
         const childrenIds = getChildrenIds()   
         console.log('2. getChildrenIds:',util.inspect(childrenIds,{ depth: null }))
          expect('').toStrictEqual('');
        });
        

    });