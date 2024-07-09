let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
   
   let val=inp.value;
   let item=document.createElement("li");
   item.innerText=val;
   let deletbtn=document.createElement("button");
   deletbtn.innerText="Delete";
   deletbtn.classList.add("delete");
   item.appendChild(deletbtn);
   
   ul.appendChild(item);

   inp.value="";
});

let dbtns=document.querySelectorAll(".delete");
ul.addEventListener("click",function(event){
   // even.target bata ta hai kon see cheez ko press keya gaya hai
   // console.dir(event.target.nodeName);
   let par=event.target.nodeName;
   
   if(par==="BUTTON"){
      // console.log("Hit the target");
      let fd=event.target.parentElement;
      fd.remove();
   }
   // console.log("Button was clicked");
});

// for(let dbtn of dbtns){
//    dbtn.addEventListener("click",function(){
//      let par=dbtn.parentElement;
//      par.remove();
//    //   through this process the elemnt add in html we can remove them but if we want to remove element 
//    // which is added later we can't remove it
//    // here we have to use event delegation that is bubbliing concept
//    // means agar parent mai ho rha tu uska child aur new element jo add ho rha hai us mai v lage ga
//    });
// }

