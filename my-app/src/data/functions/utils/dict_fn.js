const dictRemoveObj = (dict,objectId) =>{

    const dictLength = Object.keys(dict).length

    var filtered = Object.keys(dict).reduce(function (filtered, key) {
        if (dict[key] > 1) filtered[key] = dict[key];
        return filtered;
    }, {});





    return 'dictRemoveObj ran and got this result'
    
}

export { dictRemoveObj }