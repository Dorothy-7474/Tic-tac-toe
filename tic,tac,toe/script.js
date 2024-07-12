let box=document.querySelectorAll(".box");
let reset=document.querySelector(".resetbtn");
let newgame=document.querySelector(".newgamebtn");
let cont=document.querySelector(".container");
let winner=document.querySelector(".win");
let body=document.querySelector("body");

turn=true;
const wincoor=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];

newgame.classList.add("hide");
box.forEach((b1) => {
   b1.addEventListener("click",()=>{
      
      if(turn)
         {
            b1.innerText="X";
            turn=false;
         }
      else
         {
            b1.innerText="O";
            turn=true;
         }
         b1.disabled=true;
         winchecker();
         box.forEach((b1)=>{
            if(b1.innerText=="X")
            {b1.style.color="Brown";}
            else
            {
               b1.style.color="Blue"; 
            }
         })

   });
});

const winchecker=()=>{
   for(let pat of wincoor)
   {
      let pos0=box[pat[0]].innerText;
      let pos1=box[pat[1]].innerText;
      let pos2=box[pat[2]].innerText;
      if(pos0!="" && pos1!="" && pos2!="")
         {
            if(pos0===pos1 && pos1==pos2)
               {
                  console.log("winner");
                  win(pos0);
                  hide();
                  box.forEach((b)=>{
                     b.disabled=true;
                  });
               }
         }
   }
}

const enable=()=>{
   for(boxes of box)
   {boxes.disabled=false;
      boxes.innerText=" ";
   }
};

const resetbtn=()=>{
   turn=true;
   enable();
   cont.classList.remove("hide");
   winner.classList.add("hide");
   newgame.classList.add("hide");
   reset.classList.remove("hide");
};

const win=(pos)=>{
   winner.innerText=`${pos} is Winner!!`;
   winner.classList.remove("hide");
};

const hide=()=>{
   cont.classList.add("hide");
   winner.classList.add("res");
   reset.classList.add("hide");
   newgame.classList.remove("hide");
};

reset.addEventListener("click",resetbtn);
newgame.addEventListener("click",resetbtn);