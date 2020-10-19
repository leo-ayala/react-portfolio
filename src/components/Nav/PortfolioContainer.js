import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from '../pages/About';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import Home from '../pages/Home'

function Portfolio() {
  const [currentPage, handlePageChange] = useState('Home');


  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch (currentPage) {
      case 'About':
        return (<About/>)
      case 'Resume':
        return (<Resume/>)
      case 'Contact':
        return (<Contact/>)
      default:
        return (<Home/>)
      }
    //
  };

  return (
    <div >
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="render">
        {
          // Render the component returned by 'renderPage()'
        renderPage()
          //
        }
      </div>
    </div>
  );
}

export default Portfolio;
