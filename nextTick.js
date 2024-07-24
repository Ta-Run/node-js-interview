// Example asynchronus 
//Proccess OF Next Tick 
/* It puts calllback at the front of event queue to execute after code currently being execute but before IO evenets or timmers */

function add(name,x,y){
  console.log(name , x+y)
}
setImmediate(()=>{
    add('immidiate',1,2)
});

setTimeout(()=>{
    add('time out',3,4)
},1000)

process.nextTick(()=>{
    add('process',5,6)
})

add('add',7,8)