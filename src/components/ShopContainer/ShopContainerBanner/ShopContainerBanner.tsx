import Logo1 from '../../../assets/banner1.jpg';
import Logo2 from '../../../assets/banner2.jpg';
import "./ShopContainerBanner.scss";

const ShopContainerBanner = () => {
    return <div className='shopContainerBanner'>
        <img src={Logo1} alt='' className='shopContainerBanner__img'></img>
        <img src={Logo2} alt='' className='shopContainerBanner__img'></img>
    </div>
}

export default ShopContainerBanner;