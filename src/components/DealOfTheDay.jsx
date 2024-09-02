import Slider from 'react-slick'


const DealofDayData = [
  {
    image: "https://assets.wfcdn.com/im/04851845/resize-h400-w400%5Ecompr-r85/1438/143863001/default_name.jpg",
    name: "Adriean Electric Fireplace",
    newPrice: "385",
    oldPrice: "910",
  },
  {
    image: "https://assets.wfcdn.com/im/11113209/resize-h400-w400%5Ecompr-r85/2683/268305233/default_name.jpg",
    name: "Anani Upholstered Daybed",
    newPrice: "202",
    oldPrice: "359",
  },
  {
    image: "https://assets.wfcdn.com/im/54970861/resize-h400-w400%5Ecompr-r85/7512/75127004/default_name.jpg",
    name: "Upholstered Platform Storage Bed",
    newPrice: "194",
    oldPrice: "256",
  },
  {
    image: "https://assets.wfcdn.com/im/00001544/resize-h400-w400%5Ecompr-r85/5559/55597945/default_name.jpg",
    name: "Mickel Upholstered Daybed with Trundle",
    newPrice: "136",
    oldPrice: "416",
  },
  {
    image: "https://assets.wfcdn.com/im/51009757/resize-h400-w400%5Ecompr-r85/2657/265768530/default_name.jpg",
    name: "Adriean Electric Fireplace",
    newPrice: "435",
    oldPrice: "900",
  },
  {
    image: "https://assets.wfcdn.com/im/39136972/resize-h400-w400%5Ecompr-r85/2394/239498020/default_name.jpg",
    name: "Anani Upholstered Daybed",
    newPrice: "204",
    oldPrice: "256",
  },
  {
    image: "https://assets.wfcdn.com/im/73466592/resize-h400-w400%5Ecompr-r85/2539/253970081/default_name.jpg",
    name: "Upholstered Platform Storage Bed",
    newPrice: "136",
    oldPrice: "244",
  },
  {
    image: "https://assets.wfcdn.com/im/04504844/resize-h400-w400%5Ecompr-r85/2768/276890144/default_name.jpg",
    name: "Mickel Upholstered Daybed with Trundle",
    newPrice: "135",
    oldPrice: "189",
  },
]



const DealOfTheDay = ({ title }) => {

  const setting = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 7,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  }


  return (
    <div>
      <section className="popular-categories section-padding mt-15 mb-25">
        <div className="container wow fadeIn animated">
          <h3 className="section-title mb-20"><span>{title}</span></h3>
          <div className="carausel-6-columns-cover position-relative">
            <div className="slider-arrow slider-arrow-2 carausel-6-columns-arrow" id="carausel-6-columns-arrows">
            </div>
            <div className="carausel-6-columns" id="carausel-6-columns">
              <Slider {...setting}>

                {
                  DealofDayData?.map((data, index) => {
                    return <div className="card-1" key={`data-${index}`}>
                      <figure className=" img-hover-scale overflow-hidden">
                        <a href="/"><img src={data?.image} /></a>
                      </figure>
                      <h5><a href="/">{data?.name}</a></h5>
                      <div>
                        <div>
                          <span >
                            <span >
                              <span>$ {data?.newPrice}</span>
                            </span>
                            <span >
                              <span>$ {data?.oldPrice}</span>
                            </span>
                          </span>
                        </div>
                      </div>

                    </div>
                  })
                }



              </Slider >


            </div >
          </div >
        </div >
      </section >

    </div >
  )
}

export default DealOfTheDay
