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
  if (phrase === phrase.toUpperCase()){
    console.log( "NO, NOT SINCE 1938!");
  } else {
    console.log('HUH? SPEAK UP, DEAR!');
  }
}


function kebabToTitleCase(filenames){
  //console.log(filenames);
  let better = [];
  let fileJoined = filenames.join();
  //console.log(fileJoined.length);
  for(let i = 0; i < fileJoined.length; i++){
    if(fileJoined[i] === "-"){
      let hyphen = fileJoined.charAt(i+1).toUpperCase();
      fileJoined = fileJoined.slice(0,i) + hyphen + fileJoined.slice(i+2,fileJoined.length);
      //console.log(fileJoined);
    }
    if (fileJoined[i] === ","){
      let cap = fileJoined.charAt(i+1).toUpperCase();
      fileJoined = fileJoined.slice(0,i) +" "+ cap + fileJoined.slice(i+2,fileJoined.length);
      //console.log(fileJoined);
    }
    //console.log(i);
  
    better = fileJoined.split(' ');
  }
  console.log(better);
}

//Write your test cases below this comment
sayHello("Olivia"); //Hello, Olivia
letterCount("tom"); //Tom, your name has 3 letters. That name's not that long!
letterCount("national") //National, your name has 8 letters. That's a pretty long name.
greetPeople(['Olivia','Ann','Ricardo']); // Hello, Olivia //Olivia, your name has 6 letters. That's a pretty long name!
speakingGrandma('HELLO!'); // NO, NOT SINCE 1938!
speakingGrandma('hello!')// HUH? SPEAK UP, DEAR!
kebabToTitleCase(['Work-stuffs.txt','important-bank-info.png','spicy-stuff.png','big-list.txt','homework.png','recipe-book.txt']); //['WorkStuffs.txt','ImportantBankInfo.png']

//do not editing anything below this comment.
module.exports = {
  sayHello,
  letterCount,
  greetPeople,
  speakingGrandma,
  kebabToTitleCase
};
