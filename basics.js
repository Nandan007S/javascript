console.log('Hello World')
let a = 10,b = 20;
console.log(a+b);
console.log(a/b);
const num = 10;
let s1 = "lol";
let s2 = "Haha that is so funny !!!"; //string immutable
console.log(s2.slice(-9));
console.log(`hello ${9+3}`);
console.log(s2.replace("Haha","Hehe"));
console.log(Math.round(99.73));
console.log(Math.random());
console.log(1===1); //strict equality
console.log(1 == "1");
console.log(1 === '1');
let rating = 3;
if(rating === 3){
    console.log("meets expectations");
}
// let day = prompt("Enter a day").toLowerCase();
// if(day === "sunday"){
//     console.log("Hurray");
// }
// else{
//     console.log("Meh");
// }

if(undefined){ //NaN,undefined,"",0,false,null 
    console.log("Truthy");
}
else{
    console.log("Falsy");
}

const person = {
    firstname: "Mick",
    lastname: "Jagger"
}
console.log(person);
console.log(person.firstname);
console.log(person['lastname']);
const year = {
    1999: "good",
    2020: "bad"
}
console.log(year['1999']);
console.log(year[2020]);
const comments = [
    {username: 'Tammy',text:'lolololol',votes:9},
    {username: 'Fishboi',text:'glub glub',votes: 1234}
]
console.log(comments[1].text);