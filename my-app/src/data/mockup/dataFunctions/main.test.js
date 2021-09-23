import { components } from '../components'
import { documentMaps } from '../documentMaps'
import { users } from '../user'
import {getCurDocIds, getCurDocMap, getCurComponents,getCurChildren} from './main'

const userId = 1
const activeDocId = 1
const activeComponentId = 1
const usersDocs = getCurDocIds(userId,users)
const curDocMap = getCurDocMap(activeDocId, documentMaps)
const component_ids = curDocMap.all_component_ids
const curComponents = getCurComponents(component_ids,components)
const curChildren = getCurChildren(activeComponentId, curComponents, curDocMap )

describe.only('', () => {
  it('getDocs ', () => {
    // console.log('curDocIds:',usersDocs)
    expect('').toStrictEqual('');
  });
  it('getDocMap ', () => {
    // console.log('curDocMap:',curDocMap)
    expect('').toStrictEqual('');
  });
  it('getComponents ', () => {
    // console.log('curComponents:',curComponents)
    expect('').toStrictEqual('');
  });
  it('getCurChildren ', () => {
    console.log('getCurChildren:',curChildren)
    expect('').toStrictEqual('');
  });
});