class newComponent {
    constructor(parentId,url,title,image_url,notes,all_tags){
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
    newViewNode(param){
      //create the node that gets added to the view data
      const res = {
        component_id:this.newId,
        parent_id:this.parent_id,
        children:[],
        siblings:[],
        level:None,
        }
      
      return res
    }
}

    export {newComponent }