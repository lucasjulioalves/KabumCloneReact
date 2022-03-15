import ProductCard from "../ProductCard/ProductCard";
import ShopContainerImage from "./ShopContainerImage/ShopContainerImage";
import ShopContainerTopBar from "./ShopContainerTopBar/ShopContainerTopBar";
import ShopContainerBanner from "./ShopContainerBanner/ShopContainerBanner";

import "./ShopContainer.scss";
import ShopContainerDepartments from "./ShopContainerDepartments/ShopContainerDepartments";
import SideScroll from "../SideScroll/SideScroll";
const ShopContainer = () => {
    return <div className="shopContainer">
        <ShopContainerImage />
        <ShopContainerTopBar />
        <div className="shopContainer__content">
            <SideScroll size={720}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </SideScroll>
            <div>
                <a href="3" className="shopContainer__allOffers">Todas as ofertas</a>
            </div>
            <ShopContainerBanner />
            <ShopContainerDepartments />
        </div>
    </div>
}

export default ShopContainer;