import React from 'react';
import ReactDOM from 'react-dom';
import { Link, useLocation } from 'react-router-dom';


const Navigation = () => {
    const currentPage = useLocation().pathname;
    
    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <Link 
                        to="/"
                        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;