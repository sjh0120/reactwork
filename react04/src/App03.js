// export default ()=><h1>화살표 함수</h1>
const Li=(props)=><li>{props.msg}</li>
const App03=(props)=>{
    console.log(props);
    const arr=['item1','item2','item3'];

    const showList=function(){
        /*
        let lis='';

        arr.forEach(function(ele){
            lis+=<li>{ele.ele}</li>;
            console.log({ele});
        });

        return lis;
        */
        
        // return arr.map(function(ele,idx){
        //     // return <Li msg={ele} key={idx}/>;
        //     // return <li>{ele}</li>;
        //     return <li key={idx}>{ele}</li>;
        // });

        const returnArr=[];
        arr.forEach(function(ele,idx){
            return Arr.push(<li>{ele}</li>)
        });
        return returnArr;
    };

    return (
        <>
            <h1>화살표 함수</h1>
            <ul>
                {showList()}
            </ul>
        </>
    );
};
export default App03;