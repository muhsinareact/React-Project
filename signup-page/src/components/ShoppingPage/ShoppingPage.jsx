import {useState, useEffect} from "react";
import  {getProducts} from "../../util";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";  
import { NavLink } from "react-router-dom";

export function ShoppingPage() {
    const [data,setData] = useState([]);

    useEffect(()=> {
        getData();
    },[])
    const getData = async () => {
        const data = await getProducts();
        // console.log(data,"oo")
        setData(data)
    }
    console.log('qwe',data)

    return(
        <div className="app">
            {/* <div className="container"> */}
            {/* <div className='flex flex-col justify-center bg-gray-100'>
                <div className='flex justify-between items-center px-20 py-5'> */}
                    <h1 className='mainHeader'><strong>Shopping Page</strong></h1>
                {/* </div> */}
                {/* <Router> */}
                    <div className="grid-container">    
                        {
                            data.map(data => (
                                <div key={data.id} className='bg-white shadow-md rounded-lg px-10 py-10'>
                                    <NavLink to={'/products/' + data.id} component={<ProductDetails/>}>
                                    <img src={data.image} alt={data.title} className='img'/>
                                    </NavLink>
                                    <div className="mt-4">
                                        <h2 className="title">{data.title}</h2>
                                        <h2 className="price">${data.price}</h2>
                                        {/* <Link to={'data/' + data.id} /> */}
                                        {/* <Route path="data/:id"/> */}
                                        {/* <Switch> */}
                                            {/* <Route path="/data/:id"/> */}
                                            {/* <ProductDetails product={product}/> */}
                                            {/* </Route> */}
                                        {/* </Switch> */}
                                    </div>
                                    
                                </div>
                                
                            ))
                        }
                    </div>
                {/* </Router> */}
            {/* </div> */}
            {/* </div> */}
        </div>
       
    )
}