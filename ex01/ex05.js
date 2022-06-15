var arr1=['item1', 'item2', 'item3'];

// for(i=0; i<arr1.length; i++){
//     console.log(arr1[i]);
// }

// for(let idx in arr1){
//     console.log(arr1[idx]);
// }

// for(let item of arr1){
//     console.log(item);
// }

let result1=arr1.forEach(function(ele,idx){
    // console.log(ele,idx);
    // map과 달리 return 이 따로 없음! 단순 반복!
});

let result2=arr1.map(function(ele,idx){
    // console.log(ele,idx);
    return ele+idx;
}); // 배열 리턴 -> 그럼 리턴이 왜 undefined? => return 이 없어서

let result3=arr1.filter(function(ele,idx){
    //console.log(ele,idx);
    if(idx!=1)return ele;
}); // undefined 가 배열 갯수만큼 리턴 되는 것이 아니라, 그냥 빈 배열이 리턴된다!
//따라서 if(idx!=1)return ele;를 해버리면 -> idx=1인 것을 뺴고 출력
// => 필터 => react에서의 삭제!
    
let result4=arr1.find(function(ele,idx){
    console.log(ele,idx);
    return ele=='item2';
}); // true를 리턴할 때 까지 반복실행!

let result5=arr1.every(function(ele,idx,arr){
    console.log(ele,idx,arr);
    return false;
    // 한개라도 false이면 그 후 바로 종료
});

let result6=arr1.some(function(ele,idx,arr){
    console.log(ele,idx,arr);
    return true;
    // 한개라도 true이면 그 후 바로 종료
})

let arr2=[1,3,5,7,9];
let result7=arr2.reduce(function(prev,ele,idx,arr){
    console.log(prev,ele,idx,arr);
    return prev+','+ele;
});

// console.log(result7);
//console.log(result1,result2,result3,result4,result5);
// console.log(result5);
// console.log(result6);

let arr3=[1,3,5,7];
let arr4=[2,4,6,8];
let arr5=arr3.concat(arr4); // 새로운 배열을 반환한다!
let arr6=[].concat(arr3);
console.log(arr5,arr3,arr4,arr6);

