  // ProductCatalog.tsx
  import React, { useEffect, useState } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { fetchProducts } from '../Redux/productSlice';
  import { RootState } from '../Redux/store';
  import Navbar from './Navbar';
  import { ThunkDispatch } from 'redux-thunk';
  import { Action } from 'redux';
  import { addToCart } from '../Redux/cardSlice';
  import { toast, ToastContainer } from 'react-toastify'; 
  import 'react-toastify/dist/ReactToastify.css';
  import "./catalog.css"
import Rating from './Rating';


  interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    rating:Rating;
    description: string;

  }
  interface Rating {
    rate: number;
    count: number;
  }

  const ProductCatalog: React.FC = () => {
    const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch();
    const products: Product[] = useSelector((state: RootState) => state.products);
    console.log(products,"products")


    useEffect(() => {
      const fetchData = async () => {
        await dispatch(fetchProducts());
      };
      fetchData();
    }, [dispatch]);

    const [quantityMap, setQuantityMap] = useState<Record<number, number>>({});
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleIncrement = (productId: number) => {
      setQuantityMap((prevMap) => ({
        ...prevMap,
        [productId]: (prevMap[productId] || 0) + 1,
      }));
    };

    const handleDecrement = (productId: number) => {
      setQuantityMap((prevMap) => ({
        ...prevMap,
        [productId]: Math.max((prevMap[productId] || 0) - 1, 0),
      }));
    };

    const handleCardClick = (product: Product) => {
      setSelectedProduct(product);

      const modal = document.getElementById('productDetailsModal');
      if (modal) {
        (window as any).$(`#${modal.id}`).modal('show');
      }
    };

    const handleAddToCart = () => {
      if (selectedProduct) {
        const quantityToAdd = quantityMap[selectedProduct.id] || 0;
    
        if (quantityToAdd > 0) {
          dispatch(addToCart({ ...selectedProduct, quantity: quantityToAdd }));
          toast.success('Item added to cart');
          setSelectedProduct(null);
          setQuantityMap({}); 
          setTimeout(() => {
            window.location.reload();
          }, 3000); 
        } else {
          toast.error('Quantity must be greater than zero to add to cart');
        }
      }
    };
    
    
    

    return (
      <div className='container-fluid'>
        <Navbar />
        <div className="row">
        {products.map((product) => (
    <div key={product.id} className="col-md-3">
      <div className="card" onClick={() => handleCardClick(product)}>
        <img
          className="card-img-top"
          src={product.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-title">
            <a>{product.title}</a>
          </p>
          <Rating rate={product.rating.rate} count={product.rating.count} />
          <div className="d-flex justify-content-between">
        
            <span className="card-text" style={{ fontWeight: "bolder" }}>
              ₹{product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  ))}
  </div>


  {selectedProduct && (
    <div className="modal fade" id="productDetailsModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setSelectedProduct(null)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <img
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                />
              </div>
              <div className="col-md-6">
                <h4 className="modal-title mb-3" id="exampleModalLabel">{selectedProduct.title}</h4>
                <p>{selectedProduct.description}</p>
                <Rating rate={selectedProduct.rating.rate} count={selectedProduct.rating.count} />
                <div className="quantity-controls mt-3">
                  <button className="btn btn-secondary" onClick={() => handleDecrement(selectedProduct.id)}>-</button>
                  <span className="mx-2">{quantityMap[selectedProduct.id] || 0}</span>
                  <button className="btn btn-secondary" onClick={() => handleIncrement(selectedProduct.id)}>+</button>
                </div>
                <button className="btn btn-primary mt-3" onClick={() => handleAddToCart()}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}


        <ToastContainer position="bottom-right" autoClose={3000} /> 
      </div>
    );
  };

  export default ProductCatalog;
