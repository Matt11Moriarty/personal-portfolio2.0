import { useState } from 'react';
import Header from './Header'
import Navigation from './Navigation';
import Project from './Project';
import Footer from './Footer';
import { render } from 'react-dom';

const Portfolio = () => {
    const [currentPage, setCurrentPage] = useState('Home')

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        // if (currentPage === '')
    }

    const handlePageChange = (page) = setCurrentPage(page)

    return (
    <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        <main>{renderPage()}</main>
    </div>
    );
};


export default Portfolio;