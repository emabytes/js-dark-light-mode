function showAnswer(){
    document.getElementById("answer").classList.toggle("show");
    document.getElementById("answer").classList.toggle("hide");
}

function showReq() {
    document.getElementById("req").classList.toggle("show");
    document.getElementById("req").classList.toggle("hide");
}

function toBlack() {
    document.getElementById("page").classList.toggle("black");
    document.getElementById("page").classList.remove("white");
    document.getElementById("page").classList.remove("pink");
}

function toWhite() {
    document.getElementById("page").classList.toggle("white");
    document.getElementById("page").classList.remove("black");
    document.getElementById("page").classList.remove("pink");
}

function toPink() {
    console.log("working");
    document.getElementById("page").classList.toggle("pink");
}