let favMovie = (movie = "The Room", director = "Tommy Wiseau") => console.log(`my name is ${director}, and my favorite movie is ${movie}.`);
favMovie("Stalker", "Ethan");
favMovie();

let getFirstName = (name) => {
    console.log(`First name is ${name.split(" ")[0]}.`)
};
let getFirstNameConciser = (name) =>  console.log(`First name is ${name.split(" ")[0]}.`);

getFirstName('Ethan Delcambre')
getFirstNameConciser("Ethan Delcambre")

let doMath = (a, b) => ({
    exponent: a**b,
    product: a * b
});
console.log(`The exponent is ${doMath(2, 10).exponent} and the product is ${doMath(2, 10).product}`);

let preferences = (name, location, favFood) => {
    console.log(`${favFood} ${name} ${location}`)
};
let array = ["Ethan", "Birmingham", "Gyros"];
preferences(...array);
let myName = "Ethan Delcambre"
let myFunc = (anything) => {
    let myNameArray = [...myName]; 
    for (let i = 0; i < myNameArray.length; i++) {
        console.log(myNameArray[i]);
    };
};
myFunc(myName)