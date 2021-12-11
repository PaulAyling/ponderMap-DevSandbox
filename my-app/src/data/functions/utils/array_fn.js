const removeValue= (arr,valToRemove)=>{
    console.log('arg', arr)
var res = []
for (var i = 0, len = arr.length; i < len; i++) { 
    if (arr[i]!== valToRemove) { 
        console.log('arr[i]!',arr[i])
        res.push(arr[i]);
    }
}
console.log('>>>>>',res)
return res
}

export {removeValue}