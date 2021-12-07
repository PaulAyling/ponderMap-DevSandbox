import { single_document } from '../../importSingleDocument';
import { getUsersView, getUsersComponents} from '../display/display'
const util = require('util')

// GLOBAL VARS FOR TESTING
const userId = 1


describe.only('Test', () => {
    it('3. getUsersView', () => {
        const usersComponents = getUsersView(userId)   
        console.log(util.inspect(usersComponents,{ depth: null }))
        expect('').toStrictEqual('');
    });
    // it('3. getUsersComponents', () => {
        //  const usersComponents = getUsersComponents()   
        //  console.log(util.inspect(sayHi(),{ depth: null }))
        //   expect('').toStrictEqual('');
        // });
        
    it('20. Test Single document data', () => {
        console.log(util.inspect(single_document,{ depth: null }))
        expect('').toStrictEqual('');
    });
    });