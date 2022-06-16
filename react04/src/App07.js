import { createContext, useState, useContext } from "react";

var UseContext;
function App777({setMsg1}){
    const msg1 = useContext(UseContext);
    const [msg2, setMsg2]=useState('손자');
    const btnHandler=()=>{
        setMsg1('ABCD');
    }
    const btnHandler2=()=>{
        setMsg1('바꿈');
    }
    return (
    <div>
        <h1>{msg1}</h1>
        <button onClick={btnHandler}>버튼</button>
        <button onClick={btnHandler2}>버튼2</button>
    </div>
    );
};
function App77({setMsg1}){
    console.log('App77 loading...');
    return (
    <div>
        <App777 setMsg1={setMsg1}/>
    </div>
    );
};
export default function App07(){
    UseContext=createContext();
    console.log('App07 loading....');
    const [msg1,setMsg1]=useState('abcd');

    return (
    <div>
        <UseContext.Provider value={msg1}>
        <App77 setMsg1={setMsg1}/>
        </UseContext.Provider>
    </div>
    );
};