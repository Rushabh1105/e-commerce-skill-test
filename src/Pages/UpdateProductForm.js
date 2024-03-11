// import react modules 
import React, { useEffect, useState } from 'react'
// import redu hooks
import { useDispatch, useSelector } from 'react-redux'
// import async actions
import { productSelector, updateProductThunk } from '../Redux/ProductReducer'
// import router hooks
import { useParams } from 'react-router-dom';

// Update form Page
function UpdateProductForm() {
    // get data from selector
    const { product } = useSelector(productSelector);
    // state for product data
    const [productData, setProductData] = useState({});
    // get id from url parameter
    const { id } = useParams();
    // dispatch method
    const dispatch = useDispatch();

    // set product data based on product value
    useEffect(() => {
      if(product){
        setProductData({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          category: product.category,
          rating: product.rating
        })
      }else{
        setProductData({
          id: id,
          title: '',
          price: '',
          image: '',
          rating: '',
        })
      }

    }, [product, id])

    // handle update of product
    const handleUpdate = () => {
      dispatch(updateProductThunk(productData));  
    }

    // return JSX
    return (
      <div>
        <div className='new'>
        <div className='add-new-product'>
          <h2>Update Product Here</h2>
          <div className='addproduct-form'>
              {/* title */}
              <div className='form-element'>
                  <label for= 'name' >Title</label>
                  <input type='text' id='name' required onChange={(e) => setProductData({...productData, title: e.target.value})} value={productData.title}/>
              </div>
              {/* price */}
              <div className='form-element'>
                  <label for= 'price' >Price</label>
                  <input type='number' id='price' required onChange={(e) => setProductData({...productData, price: e.target.value})} value={productData.price}/>
              </div>
              {/* category */}
              <div className='form-element'>
                  <label for= 'category' >Category</label>
                  <input type='text' id='category' required onChange={(e) => setProductData({...productData, category: e.target.value})} value={productData.category}/>
              </div>
              {/* image */}
              <div className='form-element'>
                  <label for= 'image' >Image URL</label>
                  <input type='url' id='image' required onChange={(e) => setProductData({...productData, image: e.target.value})} value={productData.image}/>
              </div>
              {/* handle product update */}
              <button onClick={handleUpdate}>Update Product</button>
          </div>
        </div>
      </div>
      </div>
    )
}

export default UpdateProductForm