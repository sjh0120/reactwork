function App22({obj}){
    const clickFunc=()=>{console.log('클릭');};

    return(
        <>
            <h2>{obj.msg} {obj.msg2}</h2>
            <button onClick={clickFunc}>클릭</button>
        </>
            
    );
}

export default function App02(props){
    const obj={msg:props.msg, msg2:props.msg2}
    return (
        <>
            <h1>환영합니다</h1>
            <div>{props.msg} {props.msg2}</div>
            <App22 obj={obj}/>
        </>
    );
}