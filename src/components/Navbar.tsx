import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart);

  const cartIconStyle = {
    fontSize: '36px',
    color: cartItems.length > 0 ? 'blue' : 'black',
    marginRight: '30px',
  };

  return (
    <div className="App">
      <header className="container-fluid">
        <section className="d-flex justify-content-between">
          <div className="d-flex gap-3 align-items-center">
          <img
    src="https://www.strivemindz.com/images/offerings/icons/ecommerce.png"
    alt="logo"
    style={{ width: '150px', height: '150px' }}
  />
  <div>
    <h3 style={{ color: '#333', margin: '0', fontSize: '30px' }}>ShopVista</h3>
    <p style={{ color: '#777', margin: '0', fontSize: '16px' }}>Your One-Stop Shop</p>
  </div>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <Link to="/cart">
              <i className="fa fa-shopping-cart" style={cartIconStyle}></i>
              {cartItems.length > 0 && (
                <span style={{ fontSize: '18px', fontWeight: 'bold',marginRight:"20px" }}>
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Navbar;
