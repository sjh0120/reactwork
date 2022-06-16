import React from "react"

export default class App01 extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.msg);
        this.props=props;

    }

    clkFunc(){
        console.log(this.props.msg);
    }

    render(){
        return(
            <>
            <div>App01 test</div>
            <div>{this.props.msg}</div>
            <button onClick={()=>{console.log(this.props.msg);}}>버튼1</button>
            <button onClick={(function(){console.log(this.props.msg);}).bind(this)}>버튼2</button>
            <button onClick={(this.clkFunc).bind(this)}>버튼3</button>
            </>
        );
    }

}