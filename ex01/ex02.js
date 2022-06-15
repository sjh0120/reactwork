
for(i=0; i<5; i++){
    let a=i;
    console.log(i+'번째' + a);
}
//console.log(a);
/* 
//case 1
let => 동일 스코프 상에서 재선언 불가!

let a=1234;
let a=4321;     => 불가!

//case 2-1
동일 스코프가 아닐때는 재선언 가능!
let a= 4321;
{
    let a=1234;
    console.log('내부'+a);
}
console.log('외부'+a);

//case 2-2
반복을 통해서 동일 스코프가 아니기 때문에 가능!
for(i=0; i<5; i++){
    let a=i;
    console.log(i+'번째' + a);
}
console.log(a); => 이건 안됨!

*/