let adults = 42;
let children = 8;
let price = (adults * 12) + (children * 6);
console.log(price);
if (adults < 0){
    adults = 0;
}
if (children < 0){
    children = 0;
}
for(let a = 1; a <= adults; a++){
    console.log("Ticket#" + a);
}
for(let j = 1; j <= children; j++){
    console.log("Ticket#" + j);
}
price = calc(adults, children);
window.onload = function() {
    let btn =
document.getElementById("buyBtn");
btn.onclick = function(){
    let adults =     
document.getElementById("adults").value;
    let children =
document.getElementById("children").value;
let price = calc(adults, children);
    alert(price);
    }
}