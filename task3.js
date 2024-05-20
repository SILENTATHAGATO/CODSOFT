let s="";
let b=document.querySelectorAll(".button");
Array.from(b).forEach(e=>{
  e.addEventListener("click",c=>{
    if("="==c.target.innerHTML){
      s=eval(s);
      document.querySelector("input").value=s;
    } else if("C"==c.target.innerHTML){
      s="";
      document.querySelector("input").value=s;
    } else {
      console.log(c.target);
      s=s+c.target.innerHTML;
      document.querySelector("input").value=s;
    }
  })
})
