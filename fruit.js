const removeBtn = document.querySelectorAll(".removeBtn");
const addItem = document.querySelector("#addItem");
const container = document.querySelector("#container");

container.addEventListener("click",(event)=>{
  if(event.target.classList.contains("removeBtn")){
    event.target.parentElement.remove();
  };
});

let fruit = ["apple","mango","orange","pineapple","kiwi","guava","Strawberry","Banana","papaya","Cherry"];
addItem.addEventListener("click", ()=>{

 for(let i=0;i<=10;i++){
   const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "card");
 const randomFruit = fruit [Math.floor(Math.random()*fruit.length)];

 newDiv.innerHTML= `<h4>${randomFruit}</h4>
  <button class="removeBtn">Remove</button>
  `;
 
  container.append(newDiv);
 }
  
});