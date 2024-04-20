 var istatus=document.querySelector("h5")

 var addFriend= document.querySelector("#add")
 var removeFriend=document.querySelector("#remove")
 var check=0


 addFriend.addEventListener("click",function(){
    if(check==0){

    
istatus.innerHTML="Friends"
istatus.style.color="green"
console.log("vayo vayo vayo")
check==1

}
else{
    istatus.innerHTML="Stranger"
    istatus.style.color="red"

}

 })
 removeFriend.addEventListener("click",function(){
istatus.innerHTML="Stranger"
istatus.style.color="red"

 })

