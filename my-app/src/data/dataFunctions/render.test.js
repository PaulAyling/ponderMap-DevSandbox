import { getCurDocIds, getDocView, getDocComponents,  getCurLevel, getChildrenComponents, getCurComponent} from './render'

const user = 1
const docId = 1
const componentId = 1
const allComponentIds = [ 1, 2, 3 ]


describe.only('TEST SUITE', () => {
  it('1. Get All DocViews', () => {
    const usersDocs = getCurDocIds(user)
    console.log('usersDocs',usersDocs)
    expect('').toStrictEqual('');
  });
  it('2 getDocView ', () => {
    const curDocView = getDocView(docId)
    // console.log('CUR DOC VIEW:',curDocView)
    expect('').toStrictEqual('');
  });
  it('4 getComponents ', () => {
    const curDocComponents = getDocComponents(allComponentIds)
    console.log('curDocComponents:',curDocComponents)
    expect('').toStrictEqual('');
  });
  it('3 getCurLevel ', () => {
    // console.log('3:curLevel:',curLevel)
    expect('').toStrictEqual('');
  });
  it('getCurComponent ', () => {
    const curComponent = getCurComponent(1,'something')
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