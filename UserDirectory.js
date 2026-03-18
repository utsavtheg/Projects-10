const users = document.querySelectorAll(".userItem");
let userContainer = document.querySelector('.userContainer');
let id = document.querySelector('#searchInput');











users.forEach((user,index) => {
  if(index >= 5){
    user.style.display = "none";
  
}
})








id.addEventListener("input",() =>{
  let searchText = id.value.toLowerCase();
  users.forEach((user,index) =>{
let name = user.querySelector("h3").innerText.toLowerCase();
let email = user.querySelector("p").innerText.toLowerCase();

 
if(searchText === ""){
  if(index < 5){
   user.style.display = "flex";
  }else{
    user.style.display = "none";
  }

 }else if(name.includes(searchText) || email.includes(searchText)){
  user.style.display = 'flex';
    
}else{
  user.style.display = 'none';
}



  });
 

});