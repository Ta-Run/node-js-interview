//example of child process exec and execfile, spawn ,frok
const {exec,execFile,spawn} = require ('child_process')



exec('node nextTick.js', (error,stdout,stderr) =>{
        if(error){
            console.log('error',error.message)
            return
        }
        if(stderr){
            console.log('stderr',stderr.message)
            return
        }
        if(stdout){
            console.log('exec',stdout)
        }
    }
)


//execFile Methods

execFile('node ', ['./node nextTick.js'], (error,stdout,stderr) =>{
    if(error){
        console.log('error',error.message)
        return
    }
    if(stderr){
        console.log('stderr',stderr.message)
        return
    }
    if(stdout){
        console.log(stdout)
    }
}
)

//spawn


var ls = spawn('echo>> new.js',[],{shell:true})
try {
    console.log(ls.stderr.on)    
} catch (error) {
    console.log('spawn errr',error)
}
