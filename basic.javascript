//함수 정의 방법1
function add(x,y){
  let temp = x + y;
  return temp;
}
//함수 정의 방법2
add = (x,y) => {
  let temp = x + y;
  return temp;
}
//조건문 문법
let money = 6000;
if(money>5000)
{
  console.log("택시를 탄다.");
} else
{
  console.log("걸어간다.");
}
//반복문 문법
for(let i=0;i<10;i++)
{
  console.log("자바 ");
}
//배열
arr = [1,2,3,4,5];
arr.forEach(i =>{
  console.log("자바스크립트" + i);
});
//
let str = ' ';
for(let i = 0;i<10;i++)
{
  str=str+i;
}
console.log(str);
