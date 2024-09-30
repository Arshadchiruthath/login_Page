const express=require('express');
const heloo = express();
const fs = require('fs'); // Using the File System core module
const path=require('path')


// heloo.set('view engne', 'ejs')

// heloo.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'hi.html'))
// })
// heloo.get('/login',(req,res)=>{
//     res.sendFile('login')
// })

// console.log(__dirname);
// console.log(__filename);

// const fs = require('fs');

// Creating a readable stream from a file
const readableStream = fs.createReadStream('hai.txt', { encoding: 'utf8' });

readableStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

readableStream.on('end', () => {
    console.log('Finished reading the file.');
});



// heloo.get(__,(req,res)=>{
//     res.send('daaaaaa')
// })
// heloo.get('login',(req,res)=>{
//     res.send('login')
// })
// heloo.get('./views/login.html',(req,res)=>{
//     res.send('login')
// })


heloo.listen(3000,()=>{
    console.log('just started');
    
})














// heloo.get('/',(req,res)=>{
//     res.send("Welcome")
//     console.log('now ok');
// })

// const port=2000;
// heloo.listen(port,()=>{
//     console.log('server runned');
    
// })

// fs.readFile('test.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile('arshad.txt','hai hello','utf8',(err)=>{

//     if(err){
//         return console.log(err);
        
//     }

//     console.log("created");
    
// })

// Simulate 1000 asynchronous operations using a for loop
// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(`Operation ${i} started`);
//     }, 10000 * i); // Each operation starts 1 second after the previous one
// }

// console.log("Loop completed but operations are still running asynchronously.");


// fs.writeFile('the man.txt','Arshad hwllo','utf8',(err,data)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log("the content is= ");
    
// })

// fs.readFile('the man.txt','utf8',(err,data)=>{
//     if(err) throw err;       
    
//     console.log(data);
    
// },2000);



