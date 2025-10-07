let index=0; 

function showSlide(n){
    let slides=document.getElementsByClassName("slide");

if(n>=slides.length){
    index=0;
} else if (n<0){
    index=slides.length - 1 ;
}

for(let i=0; i<slides.length; i++){
    slides[i].style.display= "none";
}

slides[index].style.display= "block";
}

function nextSlide(){
    index++;
    showSlide(index);
}
function prevSlide(){
    index--;
    showSlide(index);
}
showSlide(index);









function validimForm(){
    let name= document.getElementById("name").value ;
    let email= document.getElementById("email").value ;

    if( name === "" || email === ""){
        alert ("Please fill in your name and email!");
        return false;
    }
    if(!email.includes("@")){
        alert("Please enter a valid email!");
        return false;
    }
    alert("The message was sent successfully.");
    return false;
}








function buyNow(){
    alert("Thank you for your purchase!");
}