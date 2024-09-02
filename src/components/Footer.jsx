
const Footer = () => {
    return (
        <footer className="main">
            <section className="newsletter p-30 text-white wow fadeIn animated">
                <div className="container">
                    <div className="row align-items-center justify-center">
                        <div className="col-lg-5 mb-md-3 mb-lg-0">
                            <div className="row align-items-center">

                                <div className="col my-4 my-md-0 des">
                                    <h5 className="font-size-15 ml-4 mb-0 text-center"><strong>
                                        Be the first to know about our best deals!
                                    </strong></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            {/* Subscribe Form */}
                            <form className="form-subcriber d-flex wow fadeIn animated">
                                <input type="email" className="form-control bg-white font-small" placeholder="Enter your email" />
                                <button className="btn bg-dark text-white" type="submit">Subscribe</button>
                            </form>
                            {/* End Subscribe Form */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding footer-mid">
                <div className="container pt-15 pb-20">
                    <div className="row text-center">


                        <div className="col-lg-4 col-md-3">
                            <h5 className="widget-title wow fadeIn animated">About</h5>
                            <ul className="footer-list wow fadeIn animated mb-sm-5 mb-md-0">
                                <li><a href="#">About Wayfair</a></li>
                                <li><a href="#">Wayfair Professional</a></li>
                                <li><a href="#">Gift Cards</a></li>
                                <li><a href="#">Wayfair Credit Card</a></li>
                                <li><a href="#">Wayfair Financings</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Sell on Wayfair</a></li>
                                <li><a href="#">Investor Relations</a></li>
                                <li><a href="#">Advertise With Us</a></li>
                                <li><a href="#">Locations</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4  col-md-3">
                            <h5 className="widget-title wow fadeIn animated">Customer Service</h5>
                            <ul className="footer-list wow fadeIn animated">
                                <li><a href="#">My Orders</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Track My Order</a></li>
                                <li><a href="#">Wayfair Accessibility Statement</a></li>
                                <li><a href="#">Return Policy</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Ideas & Advice</a></li>
                                <li><a href="#">Product Recalls</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="widget-about font-md mb-md-5 mb-lg-0">
                                <div className="logo logo-width-1 wow fadeIn animated">
                                    
                                    <h5 className="widget-title wow fadeIn animated">Contact Us</h5>
                                </div>
                                <h5 className="mb-10 mt-30 fw-600 text-grey-4 wow fadeIn animated">Customer Service</h5>
                                <p className="wow fadeIn animated">
                                    Closed. Opens at 10:00 AM.

                                </p>
                                <p className="wow fadeIn animated">
                                    Mon - Fri: 8:00 AM - 11:59 PM
                                </p>
                                <p className="wow fadeIn animated">
                                    Sat: 8:00 AM - 8:00 PM
                                </p>
                                <h5 className="mb-10 mt-30 fw-600 text-grey-4 wow fadeIn animated">Shopping Assistance</h5>
                                <div className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0">
                                    <p>
                                        Closed. Opens at 10:00 AM.
                                    </p>

                                    <p>
                                        Mon - Fri: 8:00 AM - 11:59 PM
                                    </p>

                                    <p>
                                        Sat: 8:00 AM - 8:00 PM
                                    </p>

                                    <p>
                                        Sun: 9:00 AM - 6:00 PM
                                    </p>

                                    <p>
                                        All times Eastern
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="container pb-20 wow fadeIn animated">
                <div className="row">
                    <div className="col-12 mb-20">
                        <div className="footer-bottom" />
                    </div>
                    <div className="col-lg-6">
                        <p className="float-md-left font-sm text-muted mb-0">© 2024, <strong className="text-brand"></strong>  2024 by Wayfair LLC, 4 Copley Place, 7th Floor, Boston, MA 02116 </p>
                    </div>
                </div>
            </div>

        </footer>

    )
}

export default Footer
