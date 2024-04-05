import {useState, useEffect, useContext} from "react";
import  {getProducts, getSingleProduct} from "../../util";
import {BrowserRouter as Router, Route, Link, Switch, Routes} from "react-router-dom";  
import { NavLink, useNavigate} from "react-router-dom";
import { CartContext } from "../../context/CartContext";


export function ShoppingPage() {
    const [data,setData] = useState([]);
    const[cartItems, setCartItems] = useState([]);
    const cartContext = useContext(CartContext)
    const navigate = useNavigate()
    // console.log('cartContext', cartContext)

    useEffect(()=> {
        getData();
    },[])
    const getData = async () => {
        const data = await getProducts();
        // console.log(data,"oo")
        setData(data)
    }
    // console.log('qwe',data)

    const addToCart = (item) => {
        console.log('muhhhh')
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); 

        if (isItemInCart) {
            setCartItems(
              cartItems.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              )
            );
          } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
          }
          console.log(cartItems,'cartitems')

          return (
            <CartContext.Provider
              value={{
                cartItems,
                addToCart,
              }}
            >
            </CartContext.Provider>
          );
        };
        

    return(
        <div className="app">
            <h1 className='mainHeader'><strong>Shopping Page</strong></h1>
            <button onClick={()=>{navigate('/cart')}} className="buttonCart">Cart</button>
            <div className="grid-container">    
                {
                    data.map(product => (
                        <div key={product.id} className='card'>
                            <NavLink to={'/products/' + product.id} activeclassname="current">
                            <img src={product.image} alt={product.title} className='img'/>
                            </NavLink>
                            <div className="mt-4">
                                <h2 className="title">{product.title}</h2>
                                <h2 className="price">${product.price}</h2>
                            </div>
                            <div>
                                <button onClick={addToCart} className='cartButton'>Add to Cart</button>
                            </div>
                        </div>
                        
                    ))
                }
            </div>
        </div>
       
    )
}