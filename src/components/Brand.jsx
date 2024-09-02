import Slider from "react-slick"




const AdsData = [
    { image: "https://assets.wfcdn.com/im/93559419/scale-h1046-w858%5Ecompr-r85/2858/285848038/default_name.jpg" },
    { image: "https://assets.wfcdn.com/im/59506680/scale-h1046-w858%5Ecompr-r85/2858/285848035/default_name.jpg" },
    { image: "https://assets.wfcdn.com/im/36804854/scale-h1046-w858%5Ecompr-r85/2858/285848033/default_name.jpg" },
    { image: "https://assets.wfcdn.com/im/25453941/scale-h1046-w858%5Ecompr-r85/2858/285848032/default_name.jpg" },
    { image: "https://assets.wfcdn.com/im/92747439/scale-h1046-w858%5Ecompr-r85/2902/290205192/default_name.jpg" },
    { image: "https://assets.wfcdn.com/im/81396526/scale-h1046-w858%5Ecompr-r85/2902/290205191/default_name.jpg" },
]

const Brand = () => {


    const setting = {
        infinite: true,
        autoplay: true,
        speed: 1000,
        arrows: false,
        swipeToSlide: true,
        slidesToShow: 4,
        adaptiveHeight: true,
    }


    return (
        <div className="container">

            <div className="mt-2 mb-5">
                <h1 style={{ fontSize: '25px', fontWeight: 'bold' }}>explore our exclusive brands</h1>

                <div className="mt-2 mb-2">
                    <span>Bring your vision to life with hand-curated collections, priced just right.</span>
                </div>
                <a href="/">Shop all</a>
            </div>

            <div className="tab-content " id="myTabContent">
                <div className="tab-pane fade show active" id="tab-one" role="tabpanel" >
                    <div className="row product-grid-4">

                        <Slider {...setting}>

                            {
                                AdsData?.map((data, index) => {
                                    return <div className="" key={`data-${index}`}>
                                        <div className="product-cart-wrap mb-30">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="/">
                                                        <img className="default-img" src={data?.image} />
                                                    </a>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                })
                            }
                        </Slider>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Brand
