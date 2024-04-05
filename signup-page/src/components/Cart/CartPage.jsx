import { useContext } from "react";
import { CartContext } from "./Cart";

export function CartPage(){
    // const cartItems = useContext(CartContext)

    return(
        <div>
            <h1 className="head">Cart</h1>
            {/* <div>
                {cartItems.map((item)=> {
                    <div key={item.id}>
                        <img src={item.image} alt={item.title}/>
                    </div>
                }
                )}
            </div>   */}
        </div>
        
    )
}