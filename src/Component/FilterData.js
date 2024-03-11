// Import react modules
import React from 'react';
// Importing styling
import '../Styles/FilterData.css'

// Filter Data compoentn
function FilterData(props) {
    // get function from props;
    const { filterByCategory } = props;

    // Return JSX
  return (
    <div className='filter-container'>
        <div className='category'>
            <h4>Filter By Categories</h4>
            {/* Filter by electronics category */}
            <div>
                <input 
                    type='radio' 
                    id='electronics' 
                    value='electronics' 
                    name='category' 
                    onClick={() => {filterByCategory('electronics')}}
                />
                <label for='electronics'>Electronics</label>
            </div>
            {/* Filter by  mens category*/}
            <div>
                <input 
                    type='radio' 
                    id='men' 
                    value='men' 
                    name='category'
                    onClick={() => {filterByCategory("men")}}
                />
                <label for='men'>Men</label>
            </div>
            {/* Filter by womens category */}
            <div>
                <input 
                    type='radio' 
                    id='women' 
                    value='women' 
                    name='category'
                    onClick={() => {filterByCategory("women")}}
                />
                <label for='women'>Women</label>
            </div>
            {/* Filter by jewellary category */}
            <div>
                <input 
                    type='radio' 
                    id='jewellery'
                    value='jewellery' 
                    name='category'
                    onClick={() => {filterByCategory('jewelery')}}
                />
                <label for='jewellery'>Jewellery</label>
            </div>
            {/* claer all filters */}
            <div>
                <input 
                    type='radio' 
                    id='clear'
                    value='clear' 
                    name='category'
                    onClick={() => {filterByCategory('none')}}
                />
                <label for='clear'><b>Clear</b></label>
            </div>
            <br />
            {/* Filter By proce */}
            <h4>Filter By Price</h4>
            <div>
                <input 
                    type='radio' 
                    id='price'
                    value='price' 
                    name='category'
                    onClick={() => {filterByCategory('price')}}
                />
                <label for='price'>Sort By Price (Low to High)</label>
            </div>
        </div>
        <div className='price'>
            
        </div>
    </div>
  )
}

export default FilterData