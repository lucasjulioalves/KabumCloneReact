import SearchBar from './SearchBar/SearchBar';
import TopBarMenu from './TopBarMenu/TopBarMenu';
import './TopBar.scss';
import {ReactComponent as Logo} from '../../assets/logo-kabum.svg';

const TopBar = () => { 
    return<div>
        <div className='TopBarContainer'>
            <Logo />
            <div className='TopSearchContainer'>
                <SearchBar />
            </div>
        </div>
        <TopBarMenu />
        
    </div>
}

export default TopBar;