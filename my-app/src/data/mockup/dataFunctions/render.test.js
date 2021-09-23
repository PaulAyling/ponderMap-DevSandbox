import { allComponents } from '../allComponents'
import { documentViews } from '../documentViews'
import { users } from '../users'
import {getCurDocIds, getCurDocMap, getCurComponents,getChildrenComponents, getCurLevel} from './render'

const user = 1
const docId = 1
const componentId = 1
// DATA FRO THE WHOLE DOCUMENT
const userDocs = getCurDocIds(user,users)
const curDocMap = getCurDocMap(docId, documentViews)
const componentIds = curDocMap.all_component_ids
const components = getCurComponents(componentIds,allComponents)

// SUB SECTION OF DATA (THIS COMPONENTS & ITS DIRECT CHILDREN)
const curLevel = getCurLevel(componentId,curDocMap)
const curComponent = components[componentId]
const curChildren = getChildrenComponents(componentId, components, curDocMap )

describe.only('TEST SUITE', () => {
  it('1 getDocs ', () => {
    // console.log('1: curDocIds:',userDocs)
    expect('').toStrictEqual('');
  });
  it('2 getDocMap ', () => {
    // console.log('2:curDocMap:',curDocMap)
    expect('').toStrictEqual('');
  });
  it('3 getCurLevel ', () => {
    // console.log('3:curLevel:',curLevel)
    expect('').toStrictEqual('');
  });
  it('4 getComponents ', () => {
    // console.log('4:curComponents:',components)
    expect('').toStrictEqual('');
  });
  it('getChildrenComponents ', () => {
    // console.log('5:getChildrenComponents:',curChildren)
    expect('').toStrictEqual('');
  });
});
/*
Prop compId

Document Data
renderFunctions

*/