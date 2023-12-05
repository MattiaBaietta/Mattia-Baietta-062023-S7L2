let creali=document.createElement("li")
creali.id="idlista"

if(localStorage.getItem("nome")!=null)
{
        creali.innerText=localStorage.getItem("nome")
        document.getElementById("lista").appendChild(creali)
}

document.getElementById("add").addEventListener("click",function(){  
          localStorage.setItem("nome",document.getElementById("testo").value)  
          creali.innerText=document.getElementById("testo").value
          document.getElementById("lista").appendChild(creali)  
})

document.getElementById("remove").addEventListener("click",function(){
            creali.remove()
            localStorage.removeItem("nome")
})


let crealabel=document.createElement("label")
let creacontatore=0
console.log(sessionStorage.getItem("contatore"))
if(sessionStorage.getItem("contatore")>0)
{
    creacontatore=sessionStorage.getItem("contatore")
}else{
    
}
console.log(creacontatore)

function Timer()
{
    sessionStorage.setItem("contatore",creacontatore)
    crealabel.innerText=creacontatore
    document.body.appendChild(crealabel)
    creacontatore++
}

setInterval(Timer,1000)