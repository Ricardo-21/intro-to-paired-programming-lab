console.log("Write your code below!")

function sayHello(name){
  console.log(`Hello, ${name}`);
}

function letterCount(name){
   if(name.length <= 4){
     console.log(`${name}, your name has ${name.length} letters. That name's not that long!`);
   } else {
     console.log(`${name}, your name has ${name.length} letters. That's a pretty long name!`)
   }
    
}

function greetPeople(names){
  for(let i = 0; i < names.length; i++){
    sayHello(names[i]);
    letterCount(names[i]);
  }
}

function speakingGrandma(phrase){

}


function kebabToTitleCase(filenames){

}

//Write your test cases below this comment
sayHello("Olivia"); //Hello, Olivia
letterCount("tom"); //Tom, your name has 3 letters. That name's not that long!
letterCount("national") //National, your name has 8 letters. That's a pretty long name.
greetPeople(['Olivia','Ann','Ricardo']); // Hello, Olivia //Olivia, your name has 6 letters. That's a pretty long name!


//do not editing anything below this comment.
module.exports = {
  sayHello,
  letterCount,
  greetPeople,
  speakingGrandma,
  kebabToTitleCase
};
