import React from 'react';
import '../Styles/FilterData.css'

function FilterData(props) {

    const { filterByCategory } = props;


  return (
    <div className='filter-container'>
        <div className='category'>
            <h4>Filter By Categories</h4>
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

            <div>
                <input 
                    type='radio' 
                    id='clear'
                    value='clear' 
                    name='category'
                    onClick={() => {filterByCategory('none')}}
                />
                <label for='clear'>Clear</label>
            </div>
            <br />
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