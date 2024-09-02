import Slider from 'react-slick'



const data = [
    { title: "Tommy Ceramic Table Vase", image: "https://assets.wfcdn.com/im/79042223/scale-h466-w466%5Ecompr-r85/1646/164653157/default_name.jpg" },
    { title: "Crystal Red Wine Glass", image: "https://assets.wfcdn.com/im/00625697/scale-h466-w466%5Ecompr-r85/1013/101360436/default_name.jpg" },
    { title: "Framed Wall Art", image: "https://assets.wfcdn.com/im/35349209/scale-h466-w466%5Ecompr-r85/2814/281406113/default_name.jpg" },
    { title: "Resona Stoneware 16 Piece Dinnerware Set", image: "https://assets.wfcdn.com/im/93783119/scale-h466-w466%5Ecompr-r85/2138/213805755/default_name.jpg" },
    { title: "Thames Hand Loomed Checkered Rug", image: "https://assets.wfcdn.com/im/18136898/scale-h466-w466%5Ecompr-r85/2475/247560405/default_name.jpg" },
    { title: "6 - Piece Trestle Dining Set", image: "https://assets.wfcdn.com/im/18136898/scale-h466-w466%5Ecompr-r85/2475/247560405/default_name.jpg" },
    { title: "Zadia Linen Napkin", image: "https://assets.wfcdn.com/im/27492305/scale-h466-w466%5Ecompr-r85/2635/263571042/default_name.jpg" },
    { title: "Metal Tabletop Candlestick", image: "https://assets.wfcdn.com/im/81743144/scale-h466-w466%5Ecompr-r85/2972/297282155/default_name.jpg" },
    { title: "Francesca Handmade Wood Decorative Bowl", image: "https://assets.wfcdn.com/im/04620261/scale-h466-w466%5Ecompr-r85/2972/297276658/default_name.jpg" },
]

const ShopTheLook = () => {

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
                    <h3 className="section-title mb-20"><span>shop the look</span></h3>
                    <div className="carausel-6-columns-cover position-relative">
                        <div className="slider-arrow slider-arrow-2 carausel-6-columns-arrow" id="carausel-6-columns-arrows">
                        </div>
                        <div className="carausel-6-columns" id="carausel-6-columns">
                            <Slider {...setting}>

                                {
                                    data?.map((item, index) => {
                                        return <div className="card-1" key={`data-${index}`}>
                                            <figure className=" img-hover-scale overflow-hidden">
                                                <a href="/"><img src={item?.image} /></a>
                                            </figure>
                                            <span>{item?.title}</span>
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

export default ShopTheLook
