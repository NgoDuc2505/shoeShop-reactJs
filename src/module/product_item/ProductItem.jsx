import React, { useEffect, useState } from 'react'
import './productItem.css'

export default function ProductItem(prop) {
    let product = prop.data;
    let control = prop.control;
    let modal = prop.model;
    let setEmpty = prop.setEmpty;
    let cart = prop.cart;
    let setTotal = prop.setTotal;
    let setCart = prop.setCart;
    let setAmount= prop.setAmount;
    function showDetailbtn(product) {
        prop.set(product)
    }
    function handleOpenModel(product) {
        //this function is handle opening modal and import data's shoe on it
        modal ? control(false) : control(true)
        showDetailbtn(product)
        whenCartEmpty(cart)
    }
    function whenCartEmpty(cart) {
        if (cart.length == 0) {
            setEmpty(true)
        } else (
            setEmpty(false)
        )
    }
    useEffect(() => {
        setCart((cart)=>[...cart,{x:2}]);
        let amountItem = 0;
        let rs = cart.reduce((rs,item)=>{
            let itemPr = item['price'] * item['amount']
            setAmount(amountItem += item['amount'])
            return rs+ itemPr;
        },0)
        setTotal(rs);
    },[cart]);
    function addToCart(product) {
        if (cart.length <= 0) {
            product['amount'] = 1;
            setCart((cart) => [...cart, product])
            setEmpty(false)
        } else { handleDupliProduct(product) }
    }
    function handleDupliProduct(product) {
        let count = 0;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i]['id'] == product['id']) {
                cart[i]['amount'] += 1;
                setCart((cart) => [...cart])
            } else {
                count += 1
                if (count == cart.length) {
                    product['amount'] = 1;
                    setCart((cart) => [...cart, product])
                    count = 0;
                }
            }
        }
    }
   
    return (
        <div className='py-3'>
            <div className="card card_custom" >
                <img src={product['image']} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product['name']}</h5>
                    <p className="card-text">{product['price']}$</p>
                    <button className='btn btn-info btnHover' onClick={() => { handleOpenModel(product) }}>Show detail</button>
                    <button className='btn btn-warning mx-2 btnHover' onClick={() => {
                         addToCart(product)
                    }}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
