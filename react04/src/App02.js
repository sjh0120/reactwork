function App22({obj}){
    const clickFunc=()=>{console.log('클릭');};
    const clickFunc2=function(){
        console.log('클릭');
    };
    //clickFunc와 clickFunc2는 같은 함수임!
    return (
        <>
        <h2>{obj.msg} {obj.msg2}</h2>
        <button onClick={clickFunc}>클릭</button>
        </>
    );
}

function App222(){
    return(
        <div>
            <h1>파라미터 전달</h1>
            <button onClick={(event)=>console.log('환영합니다',event.target)}>클릭</button>
        </div>
    );
}

export default function App02({msg,msg2}){
    const obj={msg:"정말로",msg2:"환영합니다"};
    return (
        <>
            <h1>환영메시지</h1>
            <App22 obj={obj}/>
        </>
    );
}