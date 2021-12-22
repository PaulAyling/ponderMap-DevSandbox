import { filterDict } from '../utils/dict_fn'
import { documentViews } from '../../../data/dbMockup/documentViews'

const util = require('util')
   //  console.log('stateMimic....',util.inspect(stateMimic,{ depth: null }))

describe.skip('UTILS SUITE', () => {

 it.skip('1. filterDict ', () => {
    var heroes = [
        {name: "Batman", franchise: "DC"},
        {name: "Ironman", franchise: "Marvel"},
        {name: "Thor", franchise: "Marvel"},
    ];
    console.log(filterDict(heroes,"franchise","Marvel"))

    expect(1).toStrictEqual(1);
 });
 it('1. filterDict 2 ', () => {
                        //dict,                                filterValue,filterField,returningField
    const res = filterDict(documentViews[1].componentHierachy,1,            "parentId", "componentId")
    console.log('res:',res)

    expect(1).toStrictEqual(1);
 });

 
});
