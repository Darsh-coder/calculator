var num1,num2
var sum ,sub,pro,oues



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  num1=prompt("input a number")
  console.log(num1)
  num2=52
  city = prompt("Enter City:")
consolke.log(city)

  add (num1,num2)
  diff(num1,num2)
  multi(num1,num2)
  div(num1,num2)


}

function draw() {
  background(255,255,255);  


 



  drawSprites();
}

function add (x,y) {
sum=x+y
console.log(sum)
}

function diff(x,y){
sub=x-y
console.log(sub)
}

function multi(x,y){
  pro=x*y
  console.log(pro)
  }

  function div(x,y){
    oues=x/y
    console.log(oues)
    }
  




