button = document.getElementById("header__button");
header = document.getElementById("header");
contentParts = document.getElementsByClassName("contentPart");
button.onclick = () =>{
    if(header.style.display == "flex"){
        header.style.display = "none";
        for(let i = 0; i < contentParts.length; i++){
            contentParts[i].style.width = "100vw"
        }
        
    }
    else{
        header.style.display = "flex";
        for(let i = 0; i < contentParts.length; i++){
            contentParts[i].style.width = "85vw"
        }
    }
}