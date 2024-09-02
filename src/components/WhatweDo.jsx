



const AdsData = [
    {
        image: "https://assets.wfcdn.com/im/16012632/scale-h664-w1142%5Ecompr-r85/2352/235224551/default_name.jpg",
        title: "contributing to all the homes we share",
        description: 'Learn more about our DEI, Social Impact, and Sustainability Work →',

    },
    {
        image: "https://assets.wfcdn.com/im/38714458/scale-h664-w1142%5Ecompr-r85/2352/235224553/default_name.jpg",
        title: 'building supplier diversity',
        description: 'Learn more about the makers behind the businesses →',
    },
    {
        image: "https://assets.wfcdn.com/im/61416284/scale-h664-w1142%5Ecompr-r85/2352/235224555/default_name.jpg",
        title: 'Shop Sustainably all things home, sustainably',
        description: 'Discover so many (easy!) ways to live more sustainably →',
    },
]

const WhatweDo = () => {
    return (
        <div className="container">
            <div className="tab-content mt-40" id="myTabContent">
                <div className="tab-pane fade show active" id="tab-one" role="tabpanel" >
                    <div className="row product-grid-4">


                        {
                            AdsData?.map((data, index) => {
                                return <div className="col-lg-4 col-md-4 col-12 col-sm-6" key={`data-${index}`}>
                                    <div className="product-cart-wrap mb-30">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="/">
                                                    <img className="default-img" src={data?.image} />
                                                </a>
                                            </div>

                                            <div className="product-content-wrap">
                                                <h2><a href="/">contributing to all the homes we share</a></h2>
                                                <span>Learn more about our DEI, Social Impact, and Sustainability Work →</span>
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

export default WhatweDo
