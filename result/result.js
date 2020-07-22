//JS
const indexTitle= document.querySelector(".indexTitle"),
showListForm= document.querySelector(".showList-form");

//sql
const indexTwo= document.querySelector(".indexTwo"),
 formTwo= document.querySelector(".formTwo");
const marginVal= document.querySelector(".marginVal");

function handleOpen(){  //handle js
    showListForm.classList.toggle("showList");
    showListForm.classList.toggle("show");
    indexTitle.classList.toggle("indexTitle");
    indexTitle.classList.toggle("marginVal");
}

function handleopenTwo(){ //handle qul
    formTwo.classList.toggle("showList");
    formTwo.classList.toggle("show");

}

indexTitle.addEventListener("click", handleOpen);
indexTwo.addEventListener("click", handleopenTwo);