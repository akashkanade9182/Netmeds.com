
function Img1({data}) {
console.log(data)
   return (
    <div  id="carouselExampleIndicators"  className="carousel pb-5  slide  container-fluid row " data-bs-ride="carousel" >
            
             {data.map((x, i) => {
        return <div className="col "  key={i}  >
        <div  class="card-body ">
       <img class=" rounded-top " width={"450px"}   src={x.img} /> 
      <div classname="card-title " class="text-start px-3    bg-white rounded-bottom small fw-bolder">{x.desc}</div>
     
          </div>
          <div >
                        <button className="carousel-control-prev  " type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon rounded-circle bg-danger"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
        </div>
      }
       
      )}
  {/* </Slider> */}
    
    </div>
  );
}
export default Img1

