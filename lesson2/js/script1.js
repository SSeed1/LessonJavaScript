

if(num<49){
    console.log("Неверно")
} else if (num>100){
    console.log("Много!")
}
else{
    console.log("Это так ")
}

(num==50)? console.log("Верно!"):console.log("Неверно");

switch(num){
    case num<49:
    console.log("Неверно");
    break;
    case num>100:
    console.log("Много");
    break;
    case num>80:
    console.log("Все еще много");
    break;
    case 50:
    console.log("Много");
    break;
    default:
    console.log("Что-то пошло не так");
    break;
}
alert("не работает");
var num=50;
while(num<55){
    console.log(num);
    num++
}
do{
    console.log(num);
    num++;
}
while(num<55);

for(let i=1;i<8;i++){
    if (i==6){
        continue;
    }
    console.log(i);
}
let y=1;
let x=y=2;
console.log(x);

alert(+"Infinity");