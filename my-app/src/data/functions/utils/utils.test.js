import {getComponentLevel, getUsersViewId } from '../utils/utils'
import stateMimic from '../../stateMimic';

// import { singleDocument } from '../../importSingleDocument';
const util = require('util')

describe.only('UTILS SUITE', () => {
//  it('1. Get Users view id ', () => {
//     const componentLevel = getComponentLevel(1)
//     console.log('TEST componentLevel....',util.inspect(componentLevel,{ depth: null }))
//     expect('').toStrictEqual('');
//  });
 it('2. Get Users view id ', () => {
    const usersViewId = getUsersViewId(stateMimic)
    console.log('TEST usersViewId....',util.inspect(usersViewId,{ depth: null }))
    expect(usersViewId).toStrictEqual(1);
 });
});
