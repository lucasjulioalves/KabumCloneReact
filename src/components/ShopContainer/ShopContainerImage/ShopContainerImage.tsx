import Image from '../../../assets/banner_img.jpg';
import './ShopContainerImage.scss';
const ShopContainerImage = () => {
    return <div className="shopImageContainer">
        <img src={Image} alt=''/>
    </div>
}

export default ShopContainerImage;