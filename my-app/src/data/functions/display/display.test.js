import { singleDocument } from '../../../data/importSingleDocument';
import {authenticatedUser} from '../../../data/dbMockup/authenticatedUser'

// import { getComponent, getChildrenIds} from './display'
import { getComponent} from './display'
const util = require('util')

// FOR TESTING I MUST MIMIC THE STATE FORMAT AS I CANNOT IMPORT CONteXT TO A MODULE
const stateMimic = {
    'document':{
        'header':singleDocument.header,
        'documentUsers':singleDocument.documentUsers,
        'documentViews':singleDocument.documentViews, //layout of the components for a given view
        'documentComponents':singleDocument.documentComponents
    }, // All components that belong to document}
    'authenticatedUserId':authenticatedUser.userId,
}
console.log('stateMimic:',util.inspect(stateMimic,{ depth: null }))

describe.only('Test', () => {
    it('1. getComponent', () => {
        const curComponent = getComponent(1,stateMimic)
        console.log('1. TEST getComponet:',util.inspect(curComponent,{ depth: null }))
        expect('').toStrictEqual('');
    });
    it('2. getChildrenIds', () => {
         const childrenIds = getChildrenIds(stateMimic)   
         console.log('2. getChildrenIds:',util.inspect(childrenIds,{ depth: null }))
          expect('').toStrictEqual('');
        });
        

    });