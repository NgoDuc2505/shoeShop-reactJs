import React from 'react'
import './banner.css'
export default function Banner() {
    return (
        <div className='banner'>
            <div className="left_banner">
                <div className="content">
                    <i className="fa-solid fa-thumbtack pin"></i>
                    <h2>Discover Your Styles</h2>
                    <h3>Our new release <i className="fa-solid fa-check-double"></i></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vel nisi ab. Deserunt doloribus assumenda aliquam nam consequatur praesentium excepturi.</p>
                    <button className='exploreBtn'> <a href="#shoeList"> Explore Now! </a><i className="fa-solid fa-right-long"></i></button>
                </div>
            </div>
            <div className="right_banner">
                <div className="image_banner">
                    <img data-toggle="tooltip" data-placement="right" title="This is our latest release: Adidas 101" src="https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2019/10/09/f1fabe28-e8a8-11e9-9e8e-4022fb9638c4_image_hires_154310.jpg?itok=FwVR_RBj&v=1570607003" alt="shoe" />
                </div>
            </div>
          
        </div>
    )
}
