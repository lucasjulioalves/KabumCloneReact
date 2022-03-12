import "./Footer.scss";
import FooterBadges from "./FooterBadges/FooterBadges";
import FooterHeader from "./FooterHeader/FooterHeader";
import FooterInfo from "./FooterInfo/FooterInfo";
import FooterLinks from "./FooterLinks/FooterLinks";
const Footer = () => {
    return <div className="footer"> 
        <FooterHeader />
        <FooterLinks />
        <FooterBadges />
        <FooterInfo />
    </div>
}

export default Footer;