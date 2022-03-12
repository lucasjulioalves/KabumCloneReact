import './ShopContainerTopBar.scss';
import Timer from "../Timer/Timer";

const ShopContainerTopBar = () => {
    return <div className="topBarContainer">
        <span className="topBarContainer__title">quinzena do consumidor</span>
        <span className="topBarContainer__timer">
        <span>A promoção termina em: </span>
        <Timer remainingTime={1165561}/>
    </span>
</div>
}

export default ShopContainerTopBar;