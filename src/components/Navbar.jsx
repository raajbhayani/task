import { Icon } from "@iconify/react"
import { useState } from "react"

const Navbar = () => {


    const [mobileView, setMobileView] = useState(false)


    // sidebar-visible

    return (

        <>
            <header className="header-area header-style-1 header-height-2">
                <div className="header-top header-top-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6">
                                <div className="header-info">
                                    <ul>
                                        <li>Up to 70% off & fast shipping | Labor Day Clearance feat. Sealy </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="header-info header-info-right">
                                    <ul>
                                        <li><a className="language-dropdown-active" href="#">Our App</a></li>
                                        <li><a href="/">financing</a></li>
                                        <li><a href="/">Professional</a></li>
                                        <li><a href="/">Free Ship Over $35</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <a href="/"><img src="download.png" alt="logo" /></a>
                            </div>
                            <div className="header-right">
                                <div className="search-style-2">
                                    <form action="#" className="justify-content-center">
                                        <input type="text" placeholder="Search for items..." />
                                    </form>
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2">
                                        <div className="header-action-icon-2">
                                            <a href="/">
                                                <Icon icon={"mingcute:user-4-fill"} />
                                            </a>
                                            <span> Sign in</span>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <a className="mini-cart-icon" href="/">
                                                <Icon icon={"ion:cart-sharp"} />
                                            </a>
                                            <span>  Cart</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom header-bottom-bg-color sticky-bar">
                    <div className="container">
                        <div className="header-wrap justify-content-center position-relative">
                            <div className="logo logo-width-1 d-block d-lg-none">
                                <a href="/"><img src="download.png" alt="logo" /></a>
                            </div>
                            <div className="header-nav d-none d-lg-flex">

                                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block">
                                    <nav>
                                        <ul>
                                            <li><a className="active" href="/">Furniture
                                            </a>
                                                <ul className="sub-menu">
                                                    <li><a href="/">Outdoor</a></li>
                                                    <li><a href="/">Bedding & Bath</a></li>
                                                    <li><a href="">Rugs</a></li>
                                                    <li><a href="">Décor & Pillows</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="">Outdoor</a>
                                            </li>
                                            <li><a href="/">Shop </a>
                                                <ul className="sub-menu">
                                                    <li><a href="/">Shop Grid – Right Sidebar</a></li>
                                                    <li><a href="">Shop Grid – Left Sidebar</a></li>
                                                    <li><a href="">Shop List – Right Sidebar</a></li>
                                                    <li><a href="">Shop List – Left Sidebar</a></li>
                                                    <li><a href="">Shop - Wide</a></li>
                                                    <li><a href="#">Single Product <i className="fi-rs-angle-right" /></a>
                                                        <ul className="level-menu">
                                                            <li><a href="/">Product – Right Sidebar</a>
                                                            </li>
                                                            <li><a href="">Product – Left Sidebar</a></li>
                                                            <li><a href="">Product – No sidebar</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="">Shop – Filter</a></li>
                                                    <li><a href="/">Shop – Wishlist</a></li>
                                                    <li><a href="/">Shop – Cart</a></li>
                                                    <li><a href="">Shop – Checkout</a></li>
                                                    <li><a href="">Shop – Compare</a></li>
                                                </ul>
                                            </li>
                                            <li className="position-static"><a href="#">Bedding & Bath </a>
                                                <ul className="mega-menu">
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a className="menu-title" href="#">Women s Fashion</a>
                                                        <ul>
                                                            <li><a href="/">Dresses</a></li>
                                                            <li><a href="/">Blouses &amp; Shirts</a></li>
                                                            <li><a href="/">Hoodies &amp; Sweatshirts</a></li>
                                                            <li><a href="/">Wedding Dresses</a></li>
                                                            <li><a href="/">Prom Dresses</a></li>
                                                            <li><a href="/">Cosplay Costumes</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a className="menu-title" href="#">Men s Fashion</a>
                                                        <ul>
                                                            <li><a href="/">Jackets</a></li>
                                                            <li><a href="/">Casual Faux Leather</a></li>
                                                            <li><a href="/">Genuine Leather</a></li>
                                                            <li><a href="/">Casual Pants</a></li>
                                                            <li><a href="/">Sweatpants</a></li>
                                                            <li><a href="/">Harem Pants</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <a className="menu-title" href="#">Technology</a>
                                                        <ul>
                                                            <li><a href="/">Gaming Laptops</a></li>
                                                            <li><a href="/">Ultraslim Laptops</a></li>
                                                            <li><a href="/">Tablets</a></li>
                                                            <li><a href="/">Laptop Accessories</a></li>
                                                            <li><a href="/">Tablet Accessories</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-34">
                                                        <div className="menu-banner-wrap">
                                                            <a href="/"><img src="assets/imgs/banner/menu-banner.jpg" alt="Evara" /></a>
                                                            <div className="menu-banner-content">
                                                                <h4>Hot deals</h4>
                                                                <h3>Don t miss<br /> Trending</h3>
                                                                <div className="menu-banner-price">
                                                                    <span className="new-price text-success">Save to 50%</span>
                                                                </div>
                                                                <div className="menu-banner-btn">
                                                                    <a href="/">Shop now</a>
                                                                </div>
                                                            </div>
                                                            <div className="menu-banner-discount">
                                                                <h3>
                                                                    <span>35%</span> off
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="">Rugs </a>
                                                <ul className="sub-menu">
                                                    <li><a href="">Blog Category Grid</a></li>
                                                    <li><a href="">Blog Category List</a></li>
                                                    <li><a href="">Blog Category Big</a></li>
                                                    <li><a href="">Blog Category Wide</a></li>
                                                    <li><a href="#">Single Post <i className="fi-rs-angle-right" /></a>
                                                        <ul className="level-menu level-menu-modify">
                                                            <li><a href="">Left Sidebar</a></li>
                                                            <li><a href="">Right Sidebar</a></li>
                                                            <li><a href="">No Sidebar</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Décor & Pillows </a>
                                                <ul className="sub-menu">
                                                    <li><a href="">About Us</a></li>
                                                    <li><a href="">Contact</a></li>
                                                    <li><a href="">My Account</a></li>
                                                    <li><a href="/">login/register</a></li>
                                                    <li><a href="">Purchase Guide</a></li>
                                                    <li><a href="">Privacy Policy</a></li>
                                                    <li><a href="">Terms of Service</a></li>
                                                    <li><a href="">404 Page</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="">Lighting</a></li>
                                            <li><a href="">Organization</a></li>
                                            <li><a href="">Kitchen</a></li>
                                            <li><a href="">Baby & Kids</a></li>
                                            <li><a href="">Home Improvement</a></li>
                                            <li><a href="">Appliances</a></li>
                                            <li><a href="">Pet</a></li>
                                            <li><a href="">Holiday</a></li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <p className="mobile-promotion">Happy <span className="text-brand">Mother s Day</span>. Big Sale Up to 40%
                            </p>
                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2">
                                        <a href="/">
                                            <Icon icon={"mingcute:user-4-fill"} />
                                        </a>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <a className="mini-cart-icon" href="/">
                                            <Icon icon={"mingcute:user-4-fill"} />
                                        </a>
                                        <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                            <ul>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <a href="/"><img alt="Evara" src="assets/imgs/shop/thumbnail-3.jpg" /></a>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4><a href="/">Plain Striola Shirts</a></h4>
                                                        <h3><span>1 × </span>$800.00</h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <a href="#"><i className="fi-rs-cross-small" /></a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <a href="/"><img alt="Evara" src="assets/imgs/shop/thumbnail-4.jpg" /></a>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4><a href="/">Macbook Pro 2022</a></h4>
                                                        <h3><span>1 × </span>$3500.00</h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <a href="#"><i className="fi-rs-cross-small" /></a>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="shopping-cart-footer">
                                                <div className="shopping-cart-total">
                                                    <h4>Total <span>$383.00</span></h4>
                                                </div>
                                                <div className="shopping-cart-button">
                                                    <a href="/">View cart</a>
                                                    <a href="">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-action-icon-2 d-block d-lg-none" onClick={() => setMobileView(true)}>
                                        <div className="burger-icon burger-icon-white">
                                            <span className="burger-icon-top" />
                                            <span className="burger-icon-mid" />
                                            <span className="burger-icon-bottom" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div className={`mobile-header-active mobile-header-wrapper-style ${mobileView ? "sidebar-visible" : ''}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <a href="/"><img src="download.png" alt="logo" /></a>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit" onClick={() => setMobileView(false)}>
                            <button className="close-style search-close">
                                <i className="icon-top" />
                                <i className="icon-bottom" />
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="mobile-search search-style-3 mobile-header-border">
                            <form action="#">
                                <input type="text" placeholder="Search for items…" />
                                <button type="submit"><i className="fi-rs-search" /></button>
                            </form>
                        </div>
                        <div className="mobile-menu-wrap mobile-header-border">

                            {/* mobile menu start */}
                            <nav>
                                <ul className="mobile-menu">
                                    {/* <li><a className="active" href="/">Furniture</a>
                                        <ul className="dropdown">
                                            <li><a href="/">Home 1</a></li>
                                            <li><a href="/">Home 2</a></li>
                                            <li><a href="">Home 3</a></li>
                                            <li><a href="">Home 4</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><span className="menu-expand" /><a href="/">shop</a>
                                        <ul className="dropdown">
                                            <li><a href="/">Shop Grid – Right Sidebar</a></li>
                                            <li><a href="">Shop Grid – Left Sidebar</a></li>
                                            <li><a href="">Shop List – Right Sidebar</a></li>
                                            <li><a href="">Shop List – Left Sidebar</a></li>
                                            <li><a href="">Shop - Wide</a></li>
                                            <li className="menu-item-has-children"><span className="menu-expand" /><a href="#">Single Product</a>
                                                <ul className="dropdown">
                                                    <li><a href="/">Product – Right Sidebar</a></li>
                                                    <li><a href="">Product – Left Sidebar</a></li>
                                                    <li><a href="">Product – No sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="">Shop – Filter</a></li>
                                            <li><a href="/">Shop – Wishlist</a></li>
                                            <li><a href="/">Shop – Cart</a></li>
                                            <li><a href="">Shop – Checkout</a></li>
                                            <li><a href="">Shop – Compare</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><span className="menu-expand" /><a href="#">Mega
                                        menu</a>
                                        <ul className="dropdown">
                                            <li className="menu-item-has-children"><span className="menu-expand" /><a href="#">Women s Fashion</a>
                                                <ul className="dropdown">
                                                    <li><a href="/">Dresses</a></li>
                                                    <li><a href="/">Blouses &amp; Shirts</a></li>
                                                    <li><a href="/">Hoodies &amp; Sweatshirts</a></li>
                                                    <li><a href="/">Women s Sets</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><span className="menu-expand" /><a href="#">Men s Fashion</a>
                                                <ul className="dropdown">
                                                    <li><a href="/">Jackets</a></li>
                                                    <li><a href="/">Casual Faux Leather</a></li>
                                                    <li><a href="/">Genuine Leather</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><span className="menu-expand" /><a href="#">Technology</a>
                                                <ul className="dropdown">
                                                    <li><a href="/">Gaming Laptops</a></li>
                                                    <li><a href="/">Ultraslim Laptops</a></li>
                                                    <li><a href="/">Tablets</a></li>
                                                    <li><a href="/">Laptop Accessories</a></li>
                                                    <li><a href="/">Tablet Accessories</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><span className="menu-expand" /><a href="">Blog</a>
                                        <ul className="dropdown">
                                            <li><a href="">Blog Category Grid</a></li>
                                            <li><a href="">Blog Category List</a></li>
                                            <li><a href="">Blog Category Big</a></li>
                                            <li><a href="">Blog Category Wide</a></li>
                                            <li className="menu-item-has-children"><span className="menu-expand" /><a href="#">Single Product Layout</a>
                                                <ul className="dropdown">
                                                    <li><a href="">Left Sidebar</a></li>
                                                    <li><a href="">Right Sidebar</a></li>
                                                    <li><a href="">No Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><span className="menu-expand" /><a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="">About Us</a></li>
                                            <li><a href="">Contact</a></li>
                                            <li><a href="">My Account</a></li>
                                            <li><a href="/">login/register</a></li>
                                            <li><a href="">Purchase Guide</a></li>
                                            <li><a href="">Privacy Policy</a></li>
                                            <li><a href="">Terms of Service</a></li>
                                            <li><a href="">404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><span className="menu-expand" /><a href="#">Language</a>
                                        <ul className="dropdown">
                                            <li><a href="#">English</a></li>
                                            <li><a href="#">French</a></li>
                                            <li><a href="#">German</a></li>
                                            <li><a href="#">Spanish</a></li>
                                        </ul>
                                    </li> */}




                                    <li  className="menu-item-has-children"><a className="active" href="/">Furniture
                                    </a>
                                        <ul className="sub-menu">
                                            <li><a href="/">Outdoor</a></li>
                                            <li><a href="/">Bedding & Bath</a></li>
                                            <li><a href="">Rugs</a></li>
                                            <li><a href="">Décor & Pillows</a></li>
                                        </ul>
                                    </li>
                                    <li  className="menu-item-has-children">
                                        <a href="">Outdoor</a>
                                    </li>
                                    <li  className="menu-item-has-children"><a href="/">Shop </a>
                                        <ul className="sub-menu">
                                            <li><a href="/">Shop Grid – Right Sidebar</a></li>
                                            <li><a href="">Shop Grid – Left Sidebar</a></li>
                                            <li><a href="">Shop List – Right Sidebar</a></li>
                                            <li><a href="">Shop List – Left Sidebar</a></li>
                                            <li><a href="">Shop - Wide</a></li>
                                            <li><a href="#">Single Product <i className="fi-rs-angle-right" /></a>
                                                <ul className="level-menu">
                                                    <li><a href="/">Product – Right Sidebar</a>
                                                    </li>
                                                    <li><a href="">Product – Left Sidebar</a></li>
                                                    <li><a href="">Product – No sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="">Shop – Filter</a></li>
                                            <li><a href="/">Shop – Wishlist</a></li>
                                            <li><a href="/">Shop – Cart</a></li>
                                            <li><a href="">Shop – Checkout</a></li>
                                            <li><a href="">Shop – Compare</a></li>
                                        </ul>
                                    </li>
                                    <li className="position-static"><a href="#">Bedding & Bath </a>
                                        <ul className="mega-menu">
                                            <li className="sub-mega-menu sub-mega-menu-width-22">
                                                <a className="menu-title" href="#">Women s Fashion</a>
                                                <ul>
                                                    <li><a href="/">Dresses</a></li>
                                                    <li><a href="/">Blouses &amp; Shirts</a></li>
                                                    <li><a href="/">Hoodies &amp; Sweatshirts</a></li>
                                                    <li><a href="/">Wedding Dresses</a></li>
                                                    <li><a href="/">Prom Dresses</a></li>
                                                    <li><a href="/">Cosplay Costumes</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-mega-menu sub-mega-menu-width-22">
                                                <a className="menu-title" href="#">Men s Fashion</a>
                                                <ul>
                                                    <li><a href="/">Jackets</a></li>
                                                    <li><a href="/">Casual Faux Leather</a></li>
                                                    <li><a href="/">Genuine Leather</a></li>
                                                    <li><a href="/">Casual Pants</a></li>
                                                    <li><a href="/">Sweatpants</a></li>
                                                    <li><a href="/">Harem Pants</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-mega-menu sub-mega-menu-width-22">
                                                <a className="menu-title" href="#">Technology</a>
                                                <ul>
                                                    <li><a href="/">Gaming Laptops</a></li>
                                                    <li><a href="/">Ultraslim Laptops</a></li>
                                                    <li><a href="/">Tablets</a></li>
                                                    <li><a href="/">Laptop Accessories</a></li>
                                                    <li><a href="/">Tablet Accessories</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-mega-menu sub-mega-menu-width-34">
                                                <div className="menu-banner-wrap">
                                                    <a href="/"><img src="assets/imgs/banner/menu-banner.jpg" alt="Evara" /></a>
                                                    <div className="menu-banner-content">
                                                        <h4>Hot deals</h4>
                                                        <h3>Don t miss<br /> Trending</h3>
                                                        <div className="menu-banner-price">
                                                            <span className="new-price text-success">Save to 50%</span>
                                                        </div>
                                                        <div className="menu-banner-btn">
                                                            <a href="/">Shop now</a>
                                                        </div>
                                                    </div>
                                                    <div className="menu-banner-discount">
                                                        <h3>
                                                            <span>35%</span> off
                                                        </h3>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li  className="menu-item-has-children"><a href="">Rugs </a>
                                        <ul className="sub-menu">
                                            <li><a href="">Blog Category Grid</a></li>
                                            <li><a href="">Blog Category List</a></li>
                                            <li><a href="">Blog Category Big</a></li>
                                            <li><a href="">Blog Category Wide</a></li>
                                            <li><a href="#">Single Post <i className="fi-rs-angle-right" /></a>
                                                <ul className="level-menu level-menu-modify">
                                                    <li><a href="">Left Sidebar</a></li>
                                                    <li><a href="">Right Sidebar</a></li>
                                                    <li><a href="">No Sidebar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li  className="menu-item-has-children"><a href="#">Décor & Pillows </a>
                                        <ul className="sub-menu">
                                            <li><a href="">About Us</a></li>
                                            <li><a href="">Contact</a></li>
                                            <li><a href="">My Account</a></li>
                                            <li><a href="/">login/register</a></li>
                                            <li><a href="">Purchase Guide</a></li>
                                            <li><a href="">Privacy Policy</a></li>
                                            <li><a href="">Terms of Service</a></li>
                                            <li><a href="">404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="">Lighting</a></li>
                                    <li className="menu-item-has-children"><a href="">Organization</a></li>
                                    <li className="menu-item-has-children"><a href="">Kitchen</a></li>
                                    <li className="menu-item-has-children"><a href="">Baby & Kids</a></li>
                                    <li className="menu-item-has-children"><a href="">Home Improvement</a></li>
                                    <li className="menu-item-has-children"><a href="">Appliances</a></li>
                                    <li className="menu-item-has-children"><a href="">Pet</a></li>
                                    <li className="menu-item-has-children"><a href="">Holiday</a></li>
                                </ul>
                            </nav>
                            {/* mobile menu end */}
                        </div>

                        {/* <div className="mobile-header-info-wrap mobile-header-border">
                            <div className="single-mobile-header-info mt-30">
                                <a href=""> Our location </a>
                            </div>
                            <div className="single-mobile-header-info">
                                <a href="/">Log In / Sign Up </a>
                            </div>
                            <div className="single-mobile-header-info">
                                <a href="#">(+01) - 2345 - 6789 </a>
                            </div>
                            
                        </div> */}

                    </div>
                </div>
            </div>



        </>

    )
}

export default Navbar
