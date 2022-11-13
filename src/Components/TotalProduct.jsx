const TotalProduct=(count)=>{

    return (
        <div className="totalProduct">
            <button className='increamentbtn'>+</button>
            <div className='countbox'>{count}</div>
            <button className='decreamentbtn' >-</button>
        </div>
    )
 }
 export default TotalProduct;