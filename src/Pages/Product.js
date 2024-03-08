import React, { useEffect, useState } from 'react';
import data from '../data.json';
import ProductCard from '../Component/ProductCard';
import '../Styles/Product.css'
import FilterData from '../Component/FilterData';

function Product() {

  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    setFilterData(data.products)
  }, [])

  function filterByCategory(category){
    if(category === 'none'){
      setFilterData(data.products)
      return;
    }

    if(category === 'price'){
      const d = [...data.products];
      d.sort((a, b) => a.price - b.price);
      setFilterData(d);
      return;
    }

    const d = data.products.filter((product) => product.category === category);
    setFilterData(d)
  }
 

  // console.log(filterData)

  return (
    <div className='product'>
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
    </div>
  )
}

export default Product