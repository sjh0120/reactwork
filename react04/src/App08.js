import { useReducer } from "react";
import React from "react";

const ADD='ADD';
const DELETE='DELETE';
let init=[<li>item1</li>];

function reducer(state,action){
    const cnt=state.length;
    switch(action.type){
        case ADD:
            return [...state,<li>item{cnt+1}</li>];
        case DELETE:
            return state.filter(function(ele,idx){
                //return false; => 전부 다 삭제시킴
                // ㄴ> true이면 삭제안하고 false이면 삭제시킨다!
                return cnt-1!=idx;
            });
        default :
            return state;
    }
}

export default function App08(){
    const [lis,dispatch]=useReducer(reducer,init);
    return(
        <>
        <button onClick={()=>{dispatch({type:'ADD'})}}>add</button>
        <button onClick={()=>{dispatch({type:'DELETE'})}}>delete</button>
        <ul>
            {lis.map((ele,idx)=>ele)}
        </ul>
        </>
    );
}