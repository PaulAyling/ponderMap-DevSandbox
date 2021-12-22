//GENERIC DICTIONARY FUNCTIONS
// WIP const dictRemoveObj = (dict,objectId) =>{
//     const dictLength = Object.keys(dict).length
//     return 'dictRemoveObj ran and got this result'
// }
const filterDict = (dict,filterValue,filterField,returningField)=>{
    /*  dict = dictionaty to filter
        filterValue = Value to use as filter
        filterField = field where the filterValue is applied
        returningField = the field from the object that is returned for the filtered object
    */
    var res = []
    for (const [ value] of Object.entries(dict)) {
        if(filterValue === value[filterField]){
            res.push(value[returningField])
        }
      }
    return res
}
export {  filterDict }