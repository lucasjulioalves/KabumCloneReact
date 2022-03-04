import {ReactComponent as SearchLogo} from '../../assets/searchicon.svg';
import './SearchBar.scss';

const SearchBar = () => {
    return <div className='SearchBar'>
        <input className='SearchBar__inputText' type='search' placeholder='Busque aqui'/>
        <SearchLogo className='SearchBar__searchLogo'/>

    </div>
}

export default SearchBar;