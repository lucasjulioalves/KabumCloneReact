import ProductCards from "./SideScroll/ProductCard/ProductCard";
import SideScroll from "./SideScroll/SideScroll";
import "./ShopContainer.scss";
import Image from '../../../assets/banner_img.jpg';
import Timer from "./Timer/Timer";

const ShopContainer = () => {
    return <div className="shopContainer">
        <div className="shopContainer__image">
            <img src={Image} alt=''/>
        </div>
        <div className="shopContainer__block">
            <div className="shopContainer__header">
                <span className="shopContainer__header__title">quinzena do consumidor</span>
                <span className="shopContainer__header__timer">
                    <span>A promoção termina em: </span>
                    <Timer remainingTime={1165561}/>
                </span>
            </div>
            <div className="shopContainer__content">
                <ProductCards />
            </div>

            
        </div>
        <SideScroll>
            
        </SideScroll>
    </div>
}

export default ShopContainer;