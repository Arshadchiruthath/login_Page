const { log } = require('console');
const fs=require('fs')

fs.writeFile('home.html','this is new',(err)=>{
    if(err){
        return console.log(err);
        
    }
    console.log("Created successfully");
    
}
)



const add=(a,b)=>a+b;
module.exports={add};



fs.writeFile('arshad.txt','arshad',(err)=>{
    if(err){
        console.log(err);
    }

    console.log("created successfully new");
}
)



fs.writeFile('hi.html','hi arshad',(err)=>{
    if(err){        
        console.log(err);

    }
    console.log('no error');
    
    
})


const fs=require(fs);
fs.writeFile('/.time.html',)











