import React, { useState } from 'react'
import './modal.css'
export default function Modal(prop) {
    let shoe = prop.data;
    let isclose = prop.model;
    let control = prop.control;
    function checkClose(){
        isclose? control(false):control(true)
    }
    return (
        <div id='myModal' className={`row rounded-lg ${isclose ? 'd-none' : 'd-flex'}`}>
            <div className="col-4 py-2 border border-dark left_content">
                <h4>{shoe['name']}</h4>
                <img className='w-75' src={shoe['image']} alt={shoe['name']} />
            </div>
            <div className="col-8 bg-light border border-dark right_content">
                <div className="content_detail">
                    <h2 className='text-dark mt-3 headingModal'>Shoe Infomation</h2>
                    <div className="row border-bottom">
                        <div className="col-4 text-left"><h5>Price</h5></div>
                        <div className="col-6 text-left"><p>{shoe['price']}$</p></div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-4 text-left"><h5>Description</h5></div>
                        <div className="col-6 text-left"><p>{shoe['description']}</p></div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-4 text-left"><h5>more info</h5></div>
                        <div className="col-6 text-left"><p>{shoe['shortDescription']}</p></div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-4 text-left"><h5>Quantity</h5></div>
                        <div className="col-6 text-left">{shoe['quantity']}</div>
                    </div>
                </div>
                <button className='btn btn-danger closeBtn'  onClick={()=>{checkClose()}} >Close</button>
            </div>
        </div>
    )
}
