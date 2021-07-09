const { reject } = require("async");

const posts = [
    {title:'post One',body:'This is Post one'},
    {title:'post two',body:'This is Post two'}
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPosts(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            
            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error : something went wrong');
            }
        },2000);
    })
}

// createPosts({title:'Post Three',body:'This is Post Three'})
//     .then(getPosts)
//     .catch(err =>console.log(err));

//Promise.all

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'Goodbye');
});

Promise.all([promise1,promise2,promise3]).then();