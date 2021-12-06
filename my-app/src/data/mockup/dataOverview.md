# Summary of DATA SOURCES
## documents.js      | PK: doc_id
All the pondermap documents

## documentViews     | PK: doc_view_id   FK: doc_id
One document can have many views, one view per user. This is all the view for all the documents

## users.js             |PK: user_id     FK:doc_view_id
All thes user of this app with associated document views