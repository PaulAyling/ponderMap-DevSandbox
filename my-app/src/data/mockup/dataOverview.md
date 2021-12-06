# SUMMARY OF DATA SOURCES
## documents.js      | PK: doc_id   FK: user_ids
All the pondermap documents

## documentViews     | PK: doc_view_id   FK: {doc_id    , conponent_id}
One document can have many views, one view per user. This is all the view for all the documents

## allComponents    | PK: component_id   
All the components for all the document views

## users.js             |PK: user_id     FK:doc_view_id
All thes user of this app with associated document views