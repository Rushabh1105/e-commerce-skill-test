import React, { useEffect, useState } from 'react';
import ProductCard from '../Component/ProductCard';
import '../Styles/Product.css'
import FilterData from '../Component/FilterData';
import { useSelector } from 'react-redux';
import { productSelector } from '../Redux/ProductReducer';
import LoadingSpinner from '../Component/Loading';

function Product() {
  
  const { products, loading } = useSelector(productSelector);
  console.log(products)
  const [filterData, setFilterData] = useState(products);
  
  

  useEffect(() => {
    if(!loading){
      setFilterData(products);
    }
  }, [loading, products])

  function filterByCategory(category){
    if(category === 'none'){
      setFilterData(products)
      return;
    }

    if(category === 'price'){
      const d = [...products];
      d.sort((a, b) => a.price - b.price);
      setFilterData(d);
      return;
    }

    const d = products.filter((product) => product.category === category);
    setFilterData(d)
  }
 
  // console.log(products)

  return (
    <div className='product'>
      {
        loading?
          <LoadingSpinner />:
          <>
            <div className='product-list'>
              {
                filterData.map((product, idx) => (
                  <ProductCard data={product} key={idx}/>
                ))
              }
            </div>
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