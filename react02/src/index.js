import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Car from './ex01';
import reportWebVitals from './reportWebVitals';

class Car2 extends React.Component{
  constructor(props){
    super();
    this.name=props.name;
  }
  render(){
    return <h2>{this.name}!</h2>;
  }
}

function Car3(props){
  return(
    <>
    <Car2 name={props.name}/>
    <h2>Car3 myCar - {props.name}!</h2>
    </>
  );
}

class Car4 extends React.Component{
  constructor(props){
    super(props);
    this.msg2='클릭안됨';
    this.state={msg:Number(props.num)}  ;
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  render(){
    return(
      <div>
        {/* <button onClick={()=>{this.msg2('클릭됨');}}>클릭</button>
        js상에서는 msg2는 클릭됨으로 바뀌지만 빌드는 갱신이 되지 않았기 때문에 view에서는 변경되지 않음!
        그렇다면 페이지 전체를 갱신한다? -> 비효율적! => 바뀌는 일부만 갱신시킨다! => state!
        따라서
        */}
        <button onClick={()=>{this.setState({msg:this.state.msg+1});console.log(this.state.msg);}}>클릭</button>
        {/*<p>{this.state.msg}</p>*/}
        <p>{this.state.msg}</p>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // import React, {Fragment} from 'react';를 안하고
  //import React from 'react'; 한다면
  //<>
  //  <h1>제목</h1>
  //</>
  //이렇게 사용함
  // <Fragment>
  //   <h1>제목</h1>
  //   <p>내용</p>
  // </Fragment>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>
  {/* <Car/>
  <Car2></Car2> */}
  {/*<Car3 name="k5"/>*/}
  
  <Car4 num="100"/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
