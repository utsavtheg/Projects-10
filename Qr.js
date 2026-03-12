let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");

let qrText = document.getElementById("qrText");
let qrText1 = document.getElementById("qrText1");
let qrText2 = document.getElementById("qrText2");
function generateQR(){

   if(qrText.value === ""){
    alert("please enter text");
   }if(qrText1.value !== "Ece"){
    alert("Sorry you are not allow!");
   }else{
     qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value + " "+ qrText1.value + " " +  qrText2.value;
     imgBox.classList.add("show-img");
   }

 
};

function downloadQR(){
  const link = document.createElement("a");
  link.href = qrImage.src;
  link.download = "qr-code.png";
  link.click();
}