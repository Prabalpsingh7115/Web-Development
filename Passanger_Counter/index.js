
let x=document.getElementById("count")

let y=0
function increment(){
    y=y+1
    x.textContent=y
}


function save(){
    if(document.getElementById("entries").textContent=="Previous Entries : "){
        document.getElementById("entries").textContent+=x.textContent
    }
    else{
        document.getElementById("entries").textContent=" "+document.getElementById("entries").textContent+" - " + x.textContent;
    }
    x.textContent=0
    y=0;
}

function reset(){
    document.getElementById("count").textContent=0
    document.getElementById("entries").textContent="Previous Entries :"
    y=0
}
