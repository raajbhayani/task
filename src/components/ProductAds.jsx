



const AdsData = [
    { image: "https://assets.wfcdn.com/im/49309530/scale-h742-w608%5Ecompr-r85/2959/295965787/default_name.jpg" },
    { image: "https://assets.wfcdn.com/im/11253241/scale-h742-w608%5Ecompr-r85/2959/295965777/default_name.jpg" },
    { image: "https://assets.wfcdn.com/im/75880075/scale-h742-w608%5Ecompr-r85/2975/297526703/default_name.jpg" },
    { image: "https://assets.wfcdn.com/im/88454441/scale-h742-w608%5Ecompr-r85/2959/295965823/default_name.jpg" },
]

const ProductAds = () => {
    return (
        <div className="container">
            <div className="tab-content mt-40" id="myTabContent">
                <div className="tab-pane fade show active" id="tab-one" role="tabpanel" >
                    <div className="row product-grid-4">


                        {
                            AdsData?.map((data, index) => {
                                return <div className="col-lg-3 col-md-4 col-12 col-sm-6" key={`data-${index}`}>
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



                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductAds
