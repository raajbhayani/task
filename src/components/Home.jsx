import BannerSlider from './BannerSlider'
import BigBanner from './BigBanner'
import Brand from './Brand'
import DealOfTheDay from './DealOfTheDay'
import Footer from './Footer'
import Mordern from './Mordern'
import MordernReverse from './MordernReverse'
import Navbar from './Navbar'
import Product from './Product'
import ProductAds from './ProductAds'
import ShopTheLook from './ShopTheLook'
import WhatweDo from './WhatweDo'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="main">
                <BannerSlider />
                <ProductAds />
                <BigBanner img={"https://assets.wfcdn.com/im/18800579/resize-h208-w2000%5Ecompr-r85/2959/295982975/24_hrs_only_flash_deals_295982975.jpg"} />
                <BigBanner img={"https://assets.wfcdn.com/im/25861150/resize-h454-w2000%5Ecompr-r85/2959/295982984/now_online_labor_day_flyer_a_roundup_of_our_favorite_deals._shop_now_295982984.jpg"} />
                <DealOfTheDay title={"deals of the day"} />
                <BigBanner img={"https://assets.wfcdn.com/im/72937333/resize-h454-w2000%5Ecompr-r85/2891/289131973/bathroom_upgrades_you_need_at_prices_you%27ll_love_289131973.jpg"} />
                <Product />
                <Mordern />
                <BigBanner img={"https://assets.wfcdn.com/im/72937333/resize-h454-w2000%5Ecompr-r85/2891/289131973/bathroom_upgrades_you_need_at_prices_you%27ll_love_289131973.jpg"} />
                <Product />
                <DealOfTheDay title={"go for leather"} />
                <MordernReverse />
                <ShopTheLook />
                <Product />
                <DealOfTheDay title={"make the most of your dining space"} />
                <BigBanner img={"https://assets.wfcdn.com/im/72937333/resize-h454-w2000%5Ecompr-r85/2891/289131973/bathroom_upgrades_you_need_at_prices_you%27ll_love_289131973.jpg"} />
                <Product />
                <DealOfTheDay title={"fresh-picked favorites"} />
                <Brand />
                <BigBanner img={"https://assets.wfcdn.com/im/22247260/resize-h454-w2000%5Ecompr-r85/2897/289751200/financing_available._find_the_payment_option_that%27s_right_for_you._learn_more.__289751200.jpg"} />
                <BigBanner img={"https://assets.wfcdn.com/im/20043935/resize-h312-w2000%5Ecompr-r85/2762/276204445/attention%2C_waybors%21_don%27t_miss_exclusive_deals_and_perks_on_the_app._download_the_app.__276204445.jpg"} />
                <WhatweDo />
                <Footer />
            </div>
        </div>
    )
}

export default Home
