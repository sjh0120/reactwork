let obj1={'key1':'val1'};
let obj2={key2:'val2'};
let obj3={['key3']:'val3'}; //외부 선언 변수와 key의 중복을 방지하기 위한 방법!
var key4='val4';
let obj4={key4};    //key와 val가 같은 경우!
//=> 위의 key4='val4'로 선언했기 떄문에 key -> key4 / val -> 'key4'가 아닌 'val4'이다!
let obj5={key4:key4}
// console.log(obj1,obj1.key1,obj1['key1'],obj2,obj3);
let obj6={key1:1111,key2:2222};
obj6[key4]=3333;    //=> 됨
obj6.key2=3333;     //=> 바뀜

let obj7={...obj6,key1:3333}; //=> 바뀜! + ...을 통해서 obj6의 객체를 복사함!
//let obj8=JSON.stringify(obj6); => 단순 문자열
let obj8=JSON.parse(JSON.stringify(obj6));  //=> JSON 문자열을 JSON.parse해서 객체로 변경!
let obj9=Object.assign({},obj6);    //=>안의 {}에 따라 객체를 생성! [] 라면 []형태로 나옴!
let obj10={func01(){console.log('func10');}};

obj10.func01();
// console.log(obj10);  //위와 같음

let obj11={func1:function(){console.log('func11');}};
obj11.func1();

//obj1 key1을 호출하는 방법으로는
//obj1.key1,  obj1['key1']이 있다! 따라서
//외부의 선언된 변수를 key로 쓰지 않기 위해서는 ['key3'] 처럼 key를 선언하면 된다!