var a = prompt("1-son kiriting") -0
var action = prompt("action kiriting")
var b = prompt("2-son kiriting")-0

switch(action){
    case "+":
        console.log(a + b);
    break;
    case "-":
        console.log(a - b);
    break;
     case "*":
         console.log(a * b);
    break;
    case "/":
          console.log(a / b);
    break;
    case "%":
         console.log(a % b);
     break;

}


// homework

//1//
var son = Number(prompt(" istagan sonni kiriting"));
var result = son + 1;
console.log("Natija:", result)


//2//
var son = Number(prompt(" istagan sonni kiriting"));

if(son > 0){
    console.log("Sizning soningiz musbat")
}
if(son < 0){
    console.log("Sizning soningiz manfiy")
}
 if(son == 0){
    console.log("Soningiz 0")
}

//3//
var son = Number(prompt(" istagan sonni kiriting"));

switch(true){
  case(son >= 0 && son <= 9):
    console.log("Bu son 1 xonali");
    break;
  case(son >= 10 && son <= 99):
    console.log("Bu son 2 xonali");
    break;
  default:
    console.log("Bu son ko'p xonali");
    break;
}

//4//
var tYil = Number(prompt("Tug'ilgan yilingizni kiriting"))
var hozirgiYil = 2025
var natija = hozirgiYil - tYil
console.log("Hozirgi yoshingiz:" , natija)

//5//
var son1 = Number(prompt("Istagan 1-sonni kiriting"));
var son2 = Number(prompt("Istagan 2-sonni kiriting"));

switch(true){
    case(son1 > son2):
    console.log("Birinchi son ikkinchi sondan katta");
    break;
    case(son2 > son1):
    console.log("Ikkinchi son birinchi sondan katta");
    break;
    default:
        console.log("Bu sonlar teng")
        break;
}



//6//
var son1 = Number(prompt("1-sonni kiriting"))
var son2 = Number(prompt("2-sonni kiriting"))
var son3 = Number(prompt("3-sonni kiriting"))
var engkattason

switch(true){
  case( son1 >= son2 && son1 >= son3):
    engkattason = son1;
    break;
  case( son2 >= son1 && son2 >= son3):
    engkattason = son2;
    break;
  case( son3 >= son1 && son3 >= son2):
    engkattason = son3;
    break;
}
console.log("Eng katta son:" , engkattason)


//7//
var son1 = Number(prompt("1-sonni kiriting"))
var son2 = Number(prompt("2-sonni kiriting"))
var son3 = Number(prompt("3-sonni kiriting"))
var engkichikson

switch(true){
  case( son1 <= son2 && son1 <= son3):
    engkichikson = son1;
    break;
  case( son2 <= son1 && son2 <= son3):
    engkichikson = son2;
    break;
  case( son3 <= son1 && son3 <= son2):
    engkichikson = son3;
    break;
}

console.log("Eng kichik son:" , engkichikson)


// 100 ball uchun//
//1//
var son = Number(prompt("Istagan sonni kiriting"))
for(var i = 1; i <= son; i++ ){
  console.log(i)
}

//2//
var son = Number(prompt("Istagan soningizni kiriting"))
for( var i = 1; i <= son; i++){
  if( i % 3 === 0 && i % 5 === 0){
    console.log(i)
  }
}


//3//
var son = Number(prompt("Istagan sonni kiriting"))
for(var i = son; i >= 1; i-- ){
  console.log(i)
}

//4//
var a = Number(prompt("a sonini kiriting"))
var b = Number(prompt("b sonini kiriting"))

for( var i = a; i <= b; i++){
  if(b % i === 0)
    console.log(i)
}

//6//
var a = Number(prompt("a sonini kiriting"))
var b = Number(prompt(" b sonini kiriting"))
var bYigindisi = 0
for( var i = a; i <= b ; i++){
  if( b % i === 0){
    bYigindisi += i
    console.log(i)
  }
}
console.log("b lar yig'indisi", bYigindisi)
