const App03=()=>{
    console.log('실행');

    const arr=['item1', 'item2', 'item3'];
    const showList=()=>{

        return arr.map(function(ele,idx){
            return <li key={idx}>{ele}</li>
        });
    };

    return (
        <>
            <div>App03</div>
            <ul>
                {showList()}
            </ul>
        </>
    );

}
export default App03;