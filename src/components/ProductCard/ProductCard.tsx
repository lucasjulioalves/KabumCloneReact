import ProductCardBottom from "./ProcuctCardBottom/ProductCardBottom";
import "./ProductCard.scss";
import ProductCardContent from "./ProductCardContent/ProductCardContent";
import ProductCardTop from "./ProductCardTop/ProductCardTop";

const ProductCard = () => {
    return <div className="productCard"> 
        <ProductCardTop />
        <ProductCardContent />
        <ProductCardBottom />
    </div>
}

export default ProductCard;