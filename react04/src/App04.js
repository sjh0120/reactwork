import React from "react";
import { useState } from "react";

export default function App04(){
    
    /*
    //1번 케이스
    const [obj,setObj]=useState({msg:'입력',msg2:'하세요'});

    const inputId=(e)=>{
        console.log(e.target.value);
        setObj({...obj,msg:e.target.value});
    };
    const inputPw=(e)=>{
        console.log(e.target.value);
        setObj({...obj,msg2:e.target.value});
    };

    const formSubmit=(e)=>{
        e.preventDefault();
        console.log(obj.msg, obj.msg2);
    };

    return (
        <>
        <h1>{obj.msg}{obj.msg2}</h1>
        <h1>{'회원가입'}</h1>
        <form onSubmit={formSubmit}>
            <label>id:
                <input onChange={inputId}/>
            </label>
            <label>pw:
                <input onChange={inputPw}/>
            </label>
            <div>
                <input type="submit" value="전달"/>
            </div>
        </form>
        </>
    );
    */

    /*
    //2번 경우
    const [msg,setMsg]=useState('입력');
    const [msg2,setMsg2]=useState('히세요');

    const inputId=(e)=>{
        console.log('아이디:',e.target.value);
        setMsg(e.target.value);
    };

    const inputPw=(e)=>{
        console.log('비번:',e.target.value);
        setMsg2(e.target.value);
    };

    const formSubmit=(e)=>{
        e.preventDefault();
        console.log(msg,msg2);
    };

    return (
        <>
        <h1>{'회원가입'}</h1>
        <form onSubmit={formSubmit}>
            <label>id:
                <input onChange={inputId}/>
            </label>
            <label>pw:
                <input onChange={inputPw}/>
            </label>
            <div>
                <input type="submit" value="전달"/>
            </div>
        </form>
        </>
    );
    */
    
    
    /*
    //방법 3
    const formSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.id.value,e.target.pw.value);
    };

    return (
        <>
        <h1>{'회원가입'}</h1>
        <form onSubmit={formSubmit}>
            <label>id:
                <input name="id"/>
            </label>
            <label>pw:
                <input name="pw"/>
            </label>
            <div>
                <input type="submit" value="전달"/>
            </div>
        </form>
        </>
    );
    */
    
    /*
    //방법 4
    const [msg,setMsg]=useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setMsg(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(msg);
    }

    return (
        <>
        <h1>{'회원가입'}</h1>
        <form onSubmit={handleSubmit}>
            <label>id:
                <input 
                    name="id"
                    value={msg.id || ""} 
                    onChange={handleChange}
                />
            </label>
            <label>pw:
                <input 
                    name="pw"
                    value={msg.pw || ""} 
                    onChange={handleChange}
                />
            </label>
            <div>
                <input type="submit" value="전달"/>
            </div>
        </form>
        </>
    );
    */
    

    /*
    //방법 5
    const [msg,setMsg]=useState('');
    const [msg2,setMsg2]=useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setMsg(values => ({...values, [name]: value}))
    }
    const handleChange2 = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setMsg2(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(msg,msg2);
    }

    return (
        <>
        <h1>{'회원가입'}</h1>
        <form onSubmit={handleSubmit}>
            <label>id:
                <input 
                    name="id"
                    onChange={handleChange}
                    value={msg.id}
                />
            </label>
            <label>pw:
                <input 
                    name="pw"
                    onChange={handleChange2}
                    value={msg2.pw}
                />
            </label>
            <div>
                <input type="submit" value="전달"/>
            </div>
        </form>
        </>
    );
    */

    
    const [msg,setMsg]=useState('');
    const [msg2,setMsg2]=useState('');
    const [chk,setChk]=useState(true);

    const inputId=(e)=>{
        console.log('아이디:',e.target.name ,e.target.value);
        setMsg(e.target.value);
    };

    const inputPw=(e)=>{
        console.log('비번:',e.target.value);
        setMsg2(e.target.value);
    };

    const inputHander=(e)=>{
        console.log('뭔데?',e.target.name,e.target.value);
        setChk(!chk);
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        console.log(msg,msg2);
    };

    return (
        <>
        <h1>{'회원가입'}</h1>
        <form onSubmit={formSubmit}>
            <label>id:
                <input 
                    name="id"
                    onChange={inputId}
                    value={msg}
                />
            </label>
            <label>pw:
                <input 
                    name="pw"
                    onChange={inputPw}
                    value={msg2}
                />
            </label>
            <label>
                <input type="checkbox" onChange={inputHander} name="tf" value={chk} checked={chk}/>
            </label>
            <div>
                <input type="submit" value="전달"/>
            </div>
        </form>
        </>
    );
    
}