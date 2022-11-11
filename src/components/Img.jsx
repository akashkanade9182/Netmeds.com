import React, { useState } from 'react';



function Img({data}) {
console.log(data)
   return (
    // <div className='d-flex justify-content-between  flex-wrap gap-4' >
    <div className='px-3 gap-4  conatiner-lg row'>
           {data.map((x, i) => {
        return <div  class="bg-white white px-4 rounded col lg flex-wrap "  key={i}  >
     <img width="200px" height="100px"  className='p-2 ' src={x.img} />
     <h1 style={{  fontSize:'16px', fontWeight:'semi-bold'}} className='my-2 mb-4'>{x.title}</h1>
        {/* <div class="boxhgt2   p1fnt"> <div classname="card-title " >{x.title}</div> */}
            {/* </div> */}
        </div>
      }
       
      )}
    
    </div>
  );
}
export default Img

