const a=1223;
const b='abcd';
const c=[];
c.push('item1');
// c=[1,2,3,4]; -> 안됨
const d={};
d.key='val';
// d=~ c=~와 같이 재선언을 통한 새로운 주소값, 객체를 선언하면
// 무조건 에러발생!
console.log(d);
