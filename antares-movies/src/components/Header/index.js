import './header.css';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <header>
            <Link className='logo' to='/'>Antares Movies</Link>
            <Link className='starred' to='/starred'>My starred movies</Link>
        </header>
    )
}

export default Header;