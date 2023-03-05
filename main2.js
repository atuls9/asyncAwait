console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {


    const promiseWife = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket')
        }, 1000);
    })

    

    const promisePopcorn = new Promise((resolve, reject) => resolve(`popcorn`))
    const getButter = new Promise((resolve, reject) => resolve(`butter`))
    const getIcecreame = new Promise((resolve, reject) => resolve(`Ice-Creame`))
    
    let ticket = await promiseWife;

    console.log(`wife: I have ${ticket}`)
    console.log('husbund:we should go in')
    console.log('wife:I am hungry')

    let popcorn = await promisePopcorn;



    console.log(`husbund:I got some ${popcorn}`)
    console.log('husbund:we should go in')
    console.log('wife:I need butter on my popcorn')

    let butter = await getButter;

    console.log(`husbund:I got some ${butter}`)
    console.log(`wife: I want ice-creame too`)

    let Icecreme = await getIcecreame;

    console.log(`husbund:I got some ${Icecreme}`);
    console.log(`husbund:anything else darling`);
    console.log(`wife: lets go we are getting late`);
    console.log(`husbund:thank you for the reminder *grins*`);

    return ticket;


}

preMovie().then((t) => console.log(`Person3: shows ${t}`))


console.log('person4: shows ticket');
console.log('person5: shows ticket');