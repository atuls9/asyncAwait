console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {


    const promiseWife = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket')
        }, 1000);
    })

    

    
    const getPopcorn = new Promise((resolve, reject) => resolve(`Popcorn`))

    const getIcecreame = new Promise((resolve, reject) => resolve(`Ice-Creame`))
    
    const getCandy = new Promise((resolve, reject) => resolve(`Candy`))
    
    let ticket = await promiseWife;

    let [popcorn,icecreame,candy]= await Promise.all([getPopcorn,getIcecreame,getCandy])

    console.log(`${popcorn},${icecreame},${candy}`); 
    return ticket;


}

preMovie().then((t) => console.log(`Person3: shows ${t}`))


console.log('person4: shows ticket');
console.log('person5: shows ticket');