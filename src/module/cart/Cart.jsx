import React, { useState } from 'react'
import './cart.css'
export default function Cart(props) {
    let setCartClose = props.setCartClose;
    let cartArr = props.cart;
    let setCart = props.setCart;
    let cart = props.cart;
    let empty = props.empty;
    let setEmpty = props.setEmpty;
    let total = props.total;
    let setTotal = props.setTotal;
    let setAmount=props.setAmount
    function handleSum() {
        let rs = 0;
        for(let i =0; i < cartArr.length; i++){
            rs += cartArr[i]['price'] * cartArr[i]['amount'];
        }
        setTotal(rs)
    }
    function handleQuantity(product, plusOrMinus) {
        product['amount'] += plusOrMinus;
        handleAmount0(product)
        for (let i = 0; i < cart.length; i++) {
            if (cart[i]['id'] == product['id']) {
                cart[i] = product;
            }
        }
        setCart((cart) => [...cart]);
        handleSum()
    }
    function handleAmount0(product) {
        if (product['amount'] == 0) {
            deleteProduct(product)
        }
    }
    function deleteProduct(product) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i]['id'] == product['id']) {
                cart.splice(i, 1)
            }
        }
        setCart((cart) => [...cart]);
        whenCartEmpty(cart)
    }
    function whenCartEmpty(cart) {
        if (cart.length == 0) {
            setEmpty(true)
            setAmount(0)
        } else (
            setEmpty(false)
        )
    }
    function clearCart() {
        setCart([])
        setEmpty(true)
        setAmount(0)
    }
    let [load, setLoad] = useState(false)
    function whenPay() {
        setTimeout(() => {
            alert('complete')
            clearCart()
        }, 2000)
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 1800)
    }
    return (
        <div className={`cart-wrapper ${props.cartClose ? 'd-none' : 'd-block'}`}>
            <div className="cart-header">
                <div className="btn-header">
                    <button className='butn' onClick={() => { setCartClose(true) }}></button>
                </div>
            </div>
            <div className="cart-body">
                {
                    cartArr.map((product, index) => (
                        <div className="cart-product" key={index}>
                            <div className="product-left">
                                <img src={product['image']} alt={product['id']} />
                            </div>
                            <div className="product-right">
                                <div className="product-title">
                                    <h3>{product['name']}</h3>
                                    <div className="price-wrapper">
                                        <h4>Price: <span>{product['price']}$</span></h4>
                                    </div>
                                </div>
                                <div className="quantity">
                                    <button className='btn btn-success quantityBtnItem' onClick={() => { handleQuantity(product, 1) }}>+</button>
                                    <h5>{product['amount']}</h5>
                                    <button className='btn btn-success quantityBtnItem' onClick={() => { handleQuantity(product, -1) }}>-</button>
                                </div>
                            </div>
                            <div className="deleteBtn mt-auto pr-2">
                                <button className='btn btn-danger deleteBtnItem' onClick={() => { deleteProduct(product) }}><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    ))
                }
                <h1>{empty ? 'Your cart is empty!' : ''}</h1>
                <div className={`show-total ${total>0 ? 'd-block' : 'd-none'}`}>Total: {total}$</div>
            </div>
            <div className="cart-footer">
                {!empty ? (<div className="cart-footer-btn">
                    <div className="load-wrapper">{load ? (<div className="load"></div>) : ''}</div>
                    <button className="btn btn-info payBtn" onClick={() => { whenPay() }}>Pay <i className="fa-solid fa-money-bill-wave"></i></button>
                    <button className="btn btn-danger clearBtn" onClick={() => { clearCart() }}>Clear <i className="fa-solid fa-broom"></i></button>
                </div>) : ''}
            </div>
            <div className="layer" onClick={() => { setCartClose(true) }}></div>
        </div>
    )
}
