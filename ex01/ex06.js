let func1=function(){console.log(this); return 'func1 run...';};
let result1=func1();

// let func2=()=>console.log('func2 run...');
let func2=(a,b)=>{console.log(this); return 'func2 run...';};
// let result2=func2(12,34);

// console.log(result1,result2);
 

//에러 펑션은 객체 생성이 안됨! => this가 없음!
//객체를 찍을때마다 새로운 객체 이기 때문에 this가 달라짐 그렇기 떄문에 객체 binding이 필요함!

func2();