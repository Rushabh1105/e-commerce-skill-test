// Import react modules
import React from 'react';
// Import styling
import '../Styles/NewProduct.css'

// Product Form Component
function NewProductForm(props) {
    // Get data from props
    const {productData, setProductData, handleAddProduct} = props;

    // Retur JSX
    return (
        <div className='addproduct-form'>
            {/* Product Title */}
            <div className='form-element'>
                <label for= 'name' >Title</label>
                <input type='text' id='name' required onChange={(e) => setProductData({...productData, title: e.target.value})}/>
            </div>
            {/* product price */}
            <div className='form-element'>
                <label for= 'price' >Price</label>
                <input type='number' id='price' required onChange={(e) => setProductData({...productData, price: e.target.value})}/>
            </div>
            {/* product category */}
            <div className='form-element'>
                <label for= 'category' >Category</label>
                <input type='text' id='category' required onChange={(e) => setProductData({...productData, category: e.target.value})}/>
            </div>
            {/* product image */}
            <div className='form-element'>
                <label for= 'image' >Image URL</label>
                <input type='url' id='image' required onChange={(e) => setProductData({...productData, image: e.target.value})}/>
            </div>
            {/* button to add product */}
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
  )
}

export default NewProductForm