import Slider from "react-slick"


const bannerData = [
    {
        image: "https://assets.wfcdn.com/im/92513392/resize-h566-w2000%5Ecompr-r85/2958/295819332/%22save_up_to_%24400__on_select_mattresses_and_more.%22_shop_now_295819332.jpg",
    },
    {
        image: "https://assets.wfcdn.com/im/92513392/resize-h566-w2000%5Ecompr-r85/2958/295819332/%22save_up_to_%24400__on_select_mattresses_and_more.%22_shop_now_295819332.jpg",
    },
    {
        image: "https://assets.wfcdn.com/im/92513392/resize-h566-w2000%5Ecompr-r85/2958/295819332/%22save_up_to_%24400__on_select_mattresses_and_more.%22_shop_now_295819332.jpg",
    }
]

const BannerSlider = () => {


    const setting = {
        infinite: true,
        autoplay: true,
        speed: 1000,
        arrows: false,
        swipeToSlide: true,
        slidesToShow: 1,
        adaptiveHeight: true,
    }


    return (
        <div>
            <section className="home-slider position-relative">
                <div className="hero-slider-1 dot-style-1 dot-style-1-position-1">
                    <Slider {...setting}>

                        {
                            bannerData?.map((data, index) => {
                                return <div className="single-hero-slider single-animation-wrap" key={`data-${index}`}>
                                    <div className="container">
                                        <div className="row align-items-center slider-animated-1">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="single-slider-img single-slider-img-1">
                                                    <img className="animated slider-1-1" src={data?.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }


                    </Slider>

                </div>
                <div className="slider-arrow hero-slider-1-arrow" />
            </section>

        </div>
    )
}

export default BannerSlider
