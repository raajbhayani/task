const ProductData = [
    { image: "https://assets.wfcdn.com/im/96993036/scale-h448-w448%5Ecompr-r85/2900/290065238/default_name.jpg", title: 'vanities', description: 'Choose from single- or double-sink styles →', },
    { image: "https://assets.wfcdn.com/im/08343949/scale-h448-w448%5Ecompr-r85/2900/290065237/default_name.jpg", title: 'mirrors', description: 'Reflect your personality →', },
    { image: "https://assets.wfcdn.com/im/42396688/scale-h448-w448%5Ecompr-r85/2900/290065234/default_name.jpg", title: 'lighting', description: 'Well-placed lights make all the difference →', },
    { image: "https://assets.wfcdn.com/im/31045775/scale-h448-w448%5Ecompr-r85/2900/290065235/default_name.jpg", title: 'wallpaper', description: 'Go from boring to bold in an instant →', },
]

const Product = () => {
    return (
        <div className="container">
            <div className="tab-content mt-40" id="myTabContent">
                <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                    <div className="row product-grid-4">



                        {
                            ProductData?.map((data, index) => {
                                return <div className="col-lg-3 col-md-4 col-12 col-sm-6" key={`data-${index}`}>
                                    <div className="product-cart-wrap mb-30">

                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href="/">
                                                    <img className="default-img" src={data?.image} />

                                                </a>
                                            </div>

                                            <div className="product-content-wrap">
                                                <h2><a href="/">vanities</a></h2>
                                                <span>Choose from single- or double-sink styles →</span>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            })
                        }


                    </div>
                    {/*End product-grid-4*/}
                </div>
            </div>

        </div>
    )
}

export default Product
