import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div className="myFooter">
    <div className="container">
      <div className='row'>
        <div className="col-6">
          <div className="contact_list">
            <div className="contact_detail">
              <i className="fa-solid fa-location-dot"></i>
              <h3>67 Hung Dao str Hoa Hai district, Da Nang city, Viet Nam</h3>
            </div>
            <div className="contact_detail">
              <i className="fa-solid fa-phone"></i>
              <h3>+84 364643405</h3>
            </div>
            <div className="contact_detail">
              <i className="fa-solid fa-envelope"></i>
              <h3>ngoduc202@gmail.com</h3>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="content_right">
            <h3>Since 2023</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem animi illo, ipsa similique nam laborum! <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, accusantium quia? Molestiae neque numquam unde? Nisi voluptatum cum nihil ut!</p>
            <div className="social_contact">
              <a href="#" className="social_item"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="social_item"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="social_item"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="social_item"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
