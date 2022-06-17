export default function DeptAdd(props){
    const insertSubmit=(e)=>{
        e.preventDefault();
        const param={};
        param.deptno=e.target.deptno.value;
        param.dname=e.target.dname.value;
        param.loc=e.target.loc.value;
        fetch('http://localhost:8080/api/dept/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
                // 'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(param)
            // body: 'deptno='+param.deptno+'&dname='+param.dname+'&loc='+param.loc
        })
        .then(res=>(res.json()));
        //.then(result=>(console.log(result)));
    }

    return(
        <>
            <h1>Add page</h1>
            <form className="form-horizontal" onSubmit={insertSubmit}>
                <div className="form-group">
                    <label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="deptno" name="deptno" placeholder="deptno"/>
                    </div>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="dname" name="dname" placeholder="dname"/>
                    </div>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="loc" name="loc" placeholder="loc"/>
                    </div>
                    </label>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-default">Sign in</button>
                    </div>
                </div>
            </form>
        </>
    );
}