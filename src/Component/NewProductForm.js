import React from 'react';
import '../Styles/NewProduct.css'

function NewProductForm(props) {
    const {productData, setProductData, handleAddProduct} = props;

    return (
        <div className='addproduct-form'>
            <div className='form-element'>
                <label for= 'name' >Title</label>
                <input type='text' id='name' required onChange={(e) => setProductData({...productData, title: e.target.value})}/>
            </div>
            <div className='form-element'>
                <label for= 'price' >Price</label>
                <input type='number' id='price' required onChange={(e) => setProductData({...productData, price: e.target.value})}/>
            </div>
            <div className='form-element'>
                <label for= 'category' >Category</label>
                <input type='text' id='category' required onChange={(e) => setProductData({...productData, category: e.target.value})}/>
            </div>
            <div className='form-element'>
                <label for= 'image' >Image URL</label>
                <input type='url' id='image' required onChange={(e) => setProductData({...productData, image: e.target.value})}/>
            </div>
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
  )
}

export default NewProductForm