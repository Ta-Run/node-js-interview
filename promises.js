/* Handle Promise By then 
Promises = Promised are basically an advancement of callback of node  */
 

const promiseHandle = new Promise((resolve,reject)=>{
    let x=10;
    let y=10
    if(x === y){
      resolve()
    }else{
        reject()
    }
})

promiseHandle.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})
