import React, { useState } from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = portfolio.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(portfolio.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    
    <div className="container mx-auto my-10">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((project) => (
          <PortfolioItem
            key={project.title}
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <nav className="flex items-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-6 h-6 mr-2 bg-gray-300 text-gray-600 rounded-full cursor-pointer flex items-center justify-center"
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`w-6 h-6 mr-2 ${
                currentPage === index + 1
                  ? 'bg-orange-300 text-white rounded-full'
                  : 'bg-gray-300 text-gray-600 rounded-full'
              } cursor-pointer flex items-center justify-center`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-6 h-6 ml-2 bg-gray-300 text-gray-600 rounded-full cursor-pointer flex items-center justify-center"
          >
            &gt;
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Portfolio;
