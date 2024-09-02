
const BigBanner = ({ img }) => {
    return (
        <div>
            <section className="banner-2 section-padding pb-0">
                <div className="container">
                    <div className="banner-img banner-big wow fadeIn animated f-none">
                        <img src={img} alt="image" />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BigBanner
