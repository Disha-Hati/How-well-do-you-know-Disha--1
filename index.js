// Final Quiz
 var readlineSync=require("readline-sync");
 var score=0;

 console.log("Welcome to How Well Do You Know Disha?");
 var userName=readlineSync.question("What is your Name?");
 console.log("welcome "+userName );
 console.log("Let's Play !!");
 console.log("Remember: Your Response should follow the format 'Abc'");
 function play(ques,ans){
   var userAns=readlineSync.question(ques);

   if(userAns===ans){
     console.log("You're Right!!");
     score++;
   }else{
     console.log("You're Wrong!!");
   }
 }


var One={
  ques:"Where does Disha Live?",
  ans:"Bangalore"
}

var Two={
  ques:"What is Her Hobby?",
  ans:"Dance"
}

var Three={
  ques:"What does she do whole day?",
  ans:"Sleep"
}

var Four={
  ques:"What is Disha's Favorite Color?",
  ans:"Black"
}

var Five={
  ques:"What is Disha's Favorite Subject?",
  ans:"Mathematics"
}

var Six={
  ques:"What is Disha's Favorite Anime?",
  anDes:"Detective Conan"
}


var set=[One,Two,Three,Four,Five,Six];
for(i=0;i<set.length;i++){
  play(set[i].ques,set[i].ans);
}

console.log("You Scored: ",score);