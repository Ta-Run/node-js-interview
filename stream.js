/* Stream is collection of data. is it not store data in chunk it is brought into the memory.

Streams are one of the fundamental concepts that power Node.js applications. They are data-handling method and are used to read or write input into output sequentially.
*/

/* Advantage of Stram 
1) Memory Efficiency
2) Time Efficiency

There are four types of steams

1) Writeable
2) Readable
3) Duplex : - Streams that are both Readable and Writeable 
4) Transform :- Duplex streams that can modify or transform the data as it is written and read.


*/

// example of streams 

const fs = require ('fs');
const createStream =  fs.createWriteStream('xyz.com');
const write_streams = createStream.write('my new streams')
// console.log(write_streams,'createStream')
const readStream =  fs.createReadStream('xyz.com')
// fs.readFile('./xyz.com',(err,data)=>{
//     if(data){
//      console.log(data)
//     }else{
//         console.log(err)
//     }
// })
const dataRead = readStream.read('this is the real data')
console.log(dataRead,'dataRead')
// console.log(readFileData,'fssssreadFileData')
