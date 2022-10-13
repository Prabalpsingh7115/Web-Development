let player={
    name:"Keher",
    chips:901,
    greet:function(){
        console.log("Namaste, ",player.name)
    }
}

let drawn_cards=[]
let summ=0;
flag=true
let messa=document.getElementById("mess")
let sum=document.getElementById("sum")
let cards=document.getElementById("cards")
let info=document.getElementById("player")
info.textContent=player.name+" : ₹"+player.chips
player.greet()


function random()
{
    let z= Math.floor(Math.random()*13)+1;
    if(z==1)
    {
        z=11
    }
    else if(z>10)
    {
        z=10
    }
    return z;
}

function start(){
    if(flag&&summ==0)
    {
        let a=random()
        let b=random()
        drawn_cards.push(a)
        drawn_cards.push(b)
        summ+=a+b
        render();
    }
}

function render()
{
    cards.textContent="Cards : ";
    for(let i=0;i<drawn_cards.length  ;i+=1)
    {
        cards.textContent+=drawn_cards[i]+" ";
    }
    sum.textContent="Sum : "+summ
    let message =""
    if(summ<21)
    {
        message="Do you want to draw a new card ?"
    }
    else if(summ===21)
    {
        flag=false
        message="Congrats, You got a Black Jack"
    }
    else
    {
        flag=false
        message="You are out of game!"
    }
    mess.textContent = message
}

function next()
{
    if(flag&&summ)
    {
        let c=random()
        drawn_cards.push(c);
        summ+=c;
        render();
    }
}

