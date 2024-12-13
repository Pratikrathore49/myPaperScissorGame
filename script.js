const choices=document.querySelectorAll(".choice");
const result=document.querySelector("#result");
const userBoard=document.querySelector("#user2");
const compBoard=document.querySelector("#computer2");
let userCount=0;
let compCount=0;

   
 let arr=["Rock","Paper","Sessor"];
for(let i=0;i<choices.length;i++){
    choices[i].addEventListener("click",(e)=>{
        Gamelogic(arr[i]);
    })
}

function compInput(){
    let random=Math.floor(Math.random()*3);
   // console.log(arr)
    // console.log("random",random)
    return arr[random];
}

 function Gamelogic(userinput){
    let computer=compInput()
    console.log("user choices",userinput);
   console.log("computer choices",computer);
  

   if(userinput===computer){
    
    result.innerHTML="Match is draw";
    result.style.backgroundColor="rgb(141, 3, 88)";
    result.style.color="white";

   }
   
   else if (userinput==="Rock" && computer==="Paper"){
    compBoard.innerHTML=++compCount;
    console.log("the work")
 
    result.innerHTML="User Lost the game";

    result.style.backgroundColor="rgb(215, 15, 15)";
       result.style.color="white";
   }
   else if(userinput==="Paper" && computer==="Rock"){
    userBoard.innerHTML=++userCount;
    console.log("the work")
 
    result.innerHTML="User Won The Game";
 
    result.style.backgroundColor="green";
    result.style.color="white";
    
   }
  
   else if(userinput==="Paper" && computer==="Sessor"){
    compBoard.innerHTML=++compCount;
    console.log("the work")
 
    result.innerHTML="User Lost the game";

    result.style.backgroundColor="rgb(215, 15, 15)";
    result.style.color="white";
   }

    else if(userinput==="Sessor" && computer==="Paper"){
      userBoard.innerHTML=++userCount;
      console.log("the work")
 
       result.innerHTML="User Won The Game";
  
       result.style.backgroundColor="green";
       result.style.color="white";

     }

     else if(userinput==="Rock" && computer==="Sessor"){
        userBoard.innerHTML=++userCount;
        console.log("the work")
 
          result.innerHTML="User Won The Game";
        
          result.style.backgroundColor="green";
          result.style.color="white";
     }

     else if(userinput==="Sessor" && computer==="Rock"){
      compBoard.innerHTML=++compCount;
      console.log("the work")
 
        result.innerHTML="User Lost the game";
      
        result.style.backgroundColor="rgb(215, 15, 15)";
           result.style.color="white";

     }

    }
