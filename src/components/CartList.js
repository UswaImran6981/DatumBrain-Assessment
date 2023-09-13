import { useEffect, useState } from 'react';
import '../App.css';

function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div>
            <p style={{backgroundColor:"yellow", width: '250px', padding: '15px', justifyItems: 'center', fontSize: '20px' }}> <b>Total Amount: </b><span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div className='container-fluid flex '>
                            <div className="row col-lg-6 col-md-6 grid" style={{}}>
                                <div className='cart-item ' style={{ paddingBottom: '10px', paddingTop: '10px', border: 'solid', margin: '15px' }}>
                                    <span>
                                        <img src={cartItem.image} style={{ height: '100px', width: '100px' }} className='p-0 m-0' />
                                    </span>
                                    <span>
                                        <p><b>{cartItem.title}</b></p>
                                        <p><b>Category: </b>{cartItem.category}</p>
                                        <p><b>Description: </b>{cartItem.description}</p>
                                        <div>
                                            <span><button
                                                onClick={() => {
                                                    const _CART = CART.map((item, index) => {
                                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                                    })
                                                    setCART(_CART)
                                                }}
                                            >-</button></span>
                                            <span> {cartItem.quantity} </span>

                                            <span><button
                                                onClick={() => {
                                                    const _CART = CART.map((item, index) => {
                                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                                    })
                                                    setCART(_CART)
                                                }}
                                            >+</button></span>
                                        </div>
                                        <span > Rs. {cartItem.price * cartItem.quantity} </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div >
    )
}

export default CartList
