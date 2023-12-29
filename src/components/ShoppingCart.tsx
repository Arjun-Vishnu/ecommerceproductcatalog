
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import './Cart.css';
import { Navigate, useNavigate } from 'react-router-dom';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const ShoppingCart: React.FC = () => {
  const cartItems: CartItem[] = useSelector((state: RootState) => state.cart);
  console.log(cartItems, "cartitems")
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const goBack = () => {
    window.history.back();
  };
  const navigate = useNavigate()

  const handleDelete = (id: number) => {

    const storedCart = localStorage.getItem('cart');
    const parsedCart = storedCart ? JSON.parse(storedCart) : [];

    const updatedCart = parsedCart.filter((item: CartItem) => item.id !== id);

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    window.location.reload();
  };

  const handleDeleteAll = () => {

    localStorage.removeItem('cart');

    window.location.reload();
  };
  const handleNavigate = () =>{ 
    navigate('/')
  }



  return (
    <div className="head">
      <i
        className="fa-solid fa-circle-chevron-left"
        style={{ fontSize: '36px' }}
        onClick={goBack}
      ></i>
      <div className="Cart-Container">
        <div className="Header">
          <h3 className="Heading">Shopping Cart</h3>
          <h5 className="Action" onClick={handleDeleteAll}>
            Remove all
          </h5>
        </div>
        <div className="Cart-Items">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="CartItem">
                <img
                  className="card-img-top"
                  style={{ height: '50px', width: '50px', marginRight: "15px " }}
                  src={item.image}
                  alt={item.title}
                />
                <div className="about">

                  <h1 className="title">{item.title}</h1>
                </div>
                <div className="counter">Quantity :{item.quantity}</div>
                <div className="prices"> ₹{(item.price * item.quantity).toFixed(2)}</div>
                <i
                  className="fa-solid fa-trash-can"
                  style={{ fontSize: '24px', marginLeft: '120px', cursor: 'pointer' }}
                  onClick={() => handleDelete(item.id)}
                ></i>
              </div>
            ))
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src="https://thumbs.dreamstime.com/b/shopping-cart-add-product-icon-shadow-commerce-glyph-vector-illustration-color-218892944.jpg"
                alt="No items found"
                style={{ width: '500px' }}
                onClick={handleNavigate}/>
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'right', flexGrow: 1, marginRight: "10%" }}>
              <h3>Total: ₹{total.toFixed(2)}</h3>
            </div>
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div style={{ textAlign: 'center', marginLeft: '20px', marginTop: "50px", }}>
          <button className="btn btn-primary " onClick={() => alert('Successfully bought items!')}>
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
