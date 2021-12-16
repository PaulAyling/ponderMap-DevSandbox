import {getComponentLevel, getUsersViewId } from '../utils/utils'
import stateMimic from '../../stateMimic';

const util = require('util')
   //  console.log('stateMimic....',util.inspect(stateMimic,{ depth: null }))

describe.only('UTILS SUITE', () => {

 it('1. Get Users view id ', () => {
    const usersViewId = getUsersViewId(stateMimic)
    console.log('1. Get Users view id RES',util.inspect(usersViewId,{ depth: null }))
    expect(usersViewId).toStrictEqual(1);
 });
 it('2. Get getComponentLevel', () => {
    const usersViewId = getComponentLevel(2,stateMimic)
    console.log('TEST usersViewId....',util.inspect(usersViewId,{ depth: null }))
    expect(usersViewId).toStrictEqual(1);
 });
 
});
