// import react modules
import React, { useEffect, useState } from 'react';
// import product card component  
import ProductCard from '../Component/ProductCard';
// import styling
import '../Styles/Product.css'
// import filterdata component
import FilterData from '../Component/FilterData';
// import redux hooks
import { useSelector } from 'react-redux';
// import product selector
import { productSelector } from '../Redux/ProductReducer';
// import loader component
import LoadingSpinner from '../Component/Loading';

// Product Page
function Product() {
  // get data from selector
  const { products, loading } = useSelector(productSelector);
  // make state for filter data
  const [filterData, setFilterData] = useState(products);

  // set filter data depending on loading and products status
  useEffect(() => {
    if(!loading){
      setFilterData(products);
    }
  }, [loading, products])

  // function to filter by category
  function filterByCategory(category){
    // clear filter
    if(category === 'none'){
      setFilterData(products)
      return;
    }
    // filter by price
    if(category === 'price'){
      const d = [...products];
      d.sort((a, b) => a.price - b.price);
      setFilterData(d);
      return;
    }
    // filter by other categories
    const d = products.filter((product) => product.category === category);
    setFilterData(d)
  }
 
  // Return JSX
  return (
    <div className='product'>
      {
        loading?
          <LoadingSpinner />:
          <>
            {/* product list cards */}
            <div className='product-list'>
              {
                filterData.map((product, idx) => (
                  <ProductCard data={product} key={idx}/>
                ))
              }
            </div>
            {/* filter component */}
            <div className='filters'>
              <FilterData 
                filterByCategory={filterByCategory}
              />
            </div>
          </>
      }
    </div>
  )
}

export default Product