import React, { useEffect, useState } from 'react'
import './header.css'
export default function Header(props) {
    let setCartClose = props.setCartClose;
    let cartClose = props.cartClose;
    let amount= props.amount;
    let[scale,setScale] = useState(false)
    function handleScale(){
        let rs = 'unScale';
        if(scale){
            rs= 'scale'
        }
        return rs;
    }
    useEffect(()=>{
        setScale(true);
        setTimeout(()=>{
            setScale(false)
        },500)
    },[amount])
    return (
        <div id='myHeader'>
            <ul className="nav justify-content-center">
                <div className="container-lg d-flex align-items-center">
                    <li className='brand'>
                        <a href="#">
                            <h1>Logo <i className="fa-solid fa-shoe-prints"></i> </h1>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <div className='moreAction d-flex'>   
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-bars"></i>
                            </a>
                            <div className="dropdown-menu">
                                <div className="headerMenu">
                                    <div className="docGr">
                                        <div className="doc"></div>
                                        <div className="doc dot2"></div>
                                        <div className="doc dot3"></div>
                                    </div>
                                </div>
                                <a className="dropdown-item" href="#">Addidas Offical</a>
                                <a className="dropdown-item" href="#">Nike Official</a>
                                <a className="dropdown-item" href="#">Newbalance Official</a>
                            </div>
                        </div>
                        <div className="cartBtn">
                        <div className={`totalOnCart ${handleScale()}`}>
                            <p>{amount}</p>
                        </div>
                        <button className="btn btn-info mx-3 cart" onClick={()=>{
                            setCartClose(cartClose ? false : true)}}>
                        <i className="fa-solid fa-cart-shopping iconDefaut"></i>
                        <i className="fa-solid fa-cart-arrow-down iconShow"></i>
                        </button>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    )
}
