import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Import your ProductCard component
import mockData from '../utils/mockData';


const itemsPerPage = 6; // Adjust this value as needed

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data (replace with your actual API call if needed)
    setProducts(mockData);
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="Products-main">
      {currentProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {/* Pagination UI (customize styling as needed) */}
      {totalPages > 1 && (
        <div className="pagination">
          <ul>
            <li className={currentPage === 1 ? 'disabled' : ''}>
              <a href="#" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous
              </a>
            </li>
            {Array.from({ length: totalPages }).map((_, index) => (
              <li key={index + 1} className={currentPage === index + 1 ? 'active' : ''}>
                <a href="#" onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </a>
              </li>
            ))}
            <li className={currentPage === totalPages ? 'disabled' : ''}>
              <a href="#" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}