import {getComponentLevel } from '../utils/utils'
import { singleDocument } from '../../importSingleDocument';
const util = require('util')

describe.only('UTILS SUITE', () => {
 it('1. GetLevel ', () => {
    const componentLevel = getComponentLevel(1)
    console.log('TEST componentLevel....',util.inspect(componentLevel,{ depth: null }))
    expect('').toStrictEqual('');
 });
});
