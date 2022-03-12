import ProductCard from "../../ProductCard/ProductCard";
import "./ShopContainer.scss";
import ShopContainerImage from "./ShopContainerImage/ShopContainerImage";
import ShopContainerTopBar from "./ShopContainerTopBar/ShopContainerTopBar";

const ShopContainer = () => {
    return <div className="shopContainer">
        <ShopContainerImage />
        <ShopContainerTopBar />
        <div className="shopContainer__mainProducts">
            <ProductCard />
        </div>
    </div>
}

export default ShopContainer;