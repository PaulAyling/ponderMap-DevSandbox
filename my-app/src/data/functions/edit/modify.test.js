 import {add, modify } from './modify'
 import { v4 as uuidv4 } from 'uuid';

 const util = require('util')
 class ponderComponent {
  constructor(url,title,image_url,notes,all_tags){
      this.newId = uuidv4()
      this.url = url,
      this.title = title,
      this.image_url = image_url
      this.notes= notes
      this.all_tags = all_tags
  }
  // create a method to gnerate the new node to add to the database
  newComponentNode(param){
    //create the node that gets added to the components data
    const res = {
      component_id:this.newId,
      url:this.url,
      all_tags:this.all_tags,
      usersVersion:{1:{'userId':1,'VersionId':1}},
      versions:{1:{
        title:this.title,
        image_url:this.image_url,
        notes:this.notes,
      }}
    }
    return res
  }
}
const newComp = new ponderComponent(
  'http://www.paulayling.me',     //url
  'The best website',             //title
  'https://pbs.twimg.com/media/DmAdG5qU0AAEnZU?format=jpg&name=small',  //image url
  'short notes',                  //notes
  ['bikes','transport']);         //tags


describe.only('MODIFY SUITE', () => {
  it('1 Add ', () => {
    // console.log(util.inspect(contextMock,{ depth: null }))
    add(1,newComp)
    expect('').toStrictEqual('');
  });
});
