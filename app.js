var wrapperEle =document.body.querySelector(".wrapper");
var wrapperEle2 =document.body.querySelector(".wrapper2");
var Dragondamage = 0;
var type ="";

wrapperEle.innerHTML = "Dragon damage:" + Dragondamage


function sunDamage (Attackdamage, Attacktype) {
    if (type === "Fire" || type === "Ice" || type === "Poison") {
        Dragondamage = Attackdamage + Attacktype + Dragondamage;
        wrapperEle.innerHTML = "Dragon damage: " + Dragondamage;
    }
    if (dragonDamage >= 10) {
        wrapperEle.innerHTML = "Dragon damage" + Dragondamage
        wrapperEle2.innerHTML = "Congratulations you win!"
    }
}

document.body.querySelector(".butt").addEventListener("click", function(){
    type = "Fire"
    sunDamage(3, -1)
})
document.body.querySelector(".butt2").addEventListener("click", function (){
    type = "Ice"
    sunDamage(1, 1)
})
document.body.querySelector(".butt3").addEventListener("click",function () {
    type = "Poison"
    sunDamage(4, 0)
})




