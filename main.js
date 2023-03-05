console.log('person1: shows ticket');
console.log('person2: shows ticket');


const promiseWife = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ticket')
    }, 1000);
})





const promisePopcorn = promiseWife.then((t)=>{
    console.log('wife: I have tickets')
    console.log('husbund:we should go in')
    console.log('wife:I am hungry')
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
    
})

const getButter = promisePopcorn.then((t)=>{
    console.log('husbund:I got some popcorn')
    console.log('husbund:we should go in')
    console.log('wife:I need butter on my popcorn')
    return new Promise((resolve,reject)=>resolve(`${t} butter`))
    
})

getButter.then((t)=>console.log(t))
console.log('person4: shows ticket');
console.log('person5: shows ticket');


