import React from 'react'
import '../App.css';

const ProductList = ({ product, addToCart }) => {
    return (
        <div className='container-fluid flex  '>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{}} className='row col-xl-3 col-lg-4 col-md-4 col-sm-6'>
                            <div className='product-item ' style={{ height: '550px' }}>
                                <img src={productItem.image} style={{ height: '300px', width: '85%' }} />
                                <p><b>{productItem.title} </b></p>
                                <p>Category: {productItem.category} </p>
                                <p> Rs. {productItem.price} /-</p>
                                <button
                                    onClick={() => addToCart(productItem)}
                                >Add To Cart</button>
                            </div>
                            <b><hr /></b>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList
