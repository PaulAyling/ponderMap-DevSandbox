import { getCurDocIds, getDocView, getComponents, getComponent, updateComponent, getCurLevel, getChildrenComponents} from './render'
const user = 1
const docViewId = 1
const componentId = 1
const allComponentIds = [ 1, 2, 3 ]
const testComponent = getComponent(componentId,user)

describe.only('TEST SUITE', () => {
  it('1. Get All DocViews', () => {
    // All docviews for a given user
    const usersDocs = getCurDocIds(user)
    // console.log('1. Get All DocViews',usersDocs)
    expect('').toStrictEqual('');
  });
  it('2 getDocView ', () => {
    // A docview for a given Id
    const curDocView = getDocView(docViewId)
    // console.log('2 getDocView:',curDocView)
    expect('').toStrictEqual('');
  });
  it('3 getComponents ', () => {
    // Compnents for a given docView
    const docComponents = getComponents(docViewId)
    console.log('3 getComponents.:',docComponents[1])
    expect('').toStrictEqual('');
  });
  it('4 getComponent ', () => {
    // Component & version for a specific componentId & userId
    const curComponent = getComponent(componentId,user)
    // console.log('4 getComponent :', curComponent)
    expect('').toStrictEqual('');
  });

  it('5 updateComponent ', () => {
    //update components object with edited content
    const newAllComponents = updateComponent(testComponent, 'Bikes: Updated Title','title')
    console.log('testComponent',testComponent)
    console.log('newAllComponents',newAllComponents[1])
    expect('').toStrictEqual('');
  });
  it('3 getCurLevel ', () => {
    // console.log('3:curLevel:',curLevel)
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