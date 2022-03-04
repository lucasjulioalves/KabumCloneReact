import ProductCards from "../ProductCard/ProductCard";
import SideScroll from "../SideScroll/SideScroll";
import "./ShopContainer.scss";

const ShopContainer = () => {
    return <div className="shopContainer">
        <SideScroll>
            <ProductCards />
        </SideScroll>
    </div>
}

export default ShopContainer;