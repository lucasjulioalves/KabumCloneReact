import ProductCard from "../ProductCard/ProductCard";
import ShopContainerImage from "./ShopContainerImage/ShopContainerImage";
import ShopContainerTopBar from "./ShopContainerTopBar/ShopContainerTopBar";
import ShopContainerBanner from "./ShopContainerBanner/ShopContainerBanner";

import "./ShopContainer.scss";
import ShopContainerDepartments from "./ShopContainerDepartments/ShopContainerDepartments";
const ShopContainer = () => {
    return <div className="shopContainer">
        <ShopContainerImage />
        <ShopContainerTopBar />
        <div className="shopContainer__content">
            <div className="shopContainer__mainProducts">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div>
                <a href="3" className="shopContainer__allOffers">Todas as ofertas</a>
            </div>
            <ShopContainerBanner />
            <ShopContainerDepartments />
        </div>
    </div>
}

export default ShopContainer;