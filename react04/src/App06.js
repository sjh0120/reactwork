import React from "react";
import { useEffect,useState } from "react";


export default function App06(props){
    console.log('App06 run...');
    const [msg,setMsg]=useState("첫번째");
    const [msg2,setMsg2]=useState("두번째");
    useEffect(function(){
        console.log('useEffect...');
        setTimeout(()=>{setMsg(msg+1);});
    },[msg,msg2]);

    const btnHandler=()=>{
        setMsg(new String('이벤트 발생'));
    };
    const btnHandler2=()=>{
        setMsg2(new String('이벤트 발생'));
    };

    return (
        <div>
            <h1>{msg}</h1>
            <button onClick={btnHandler}>버튼</button>  
            <button onClick={btnHandler2}>버튼</button>
        </div>
    );
}