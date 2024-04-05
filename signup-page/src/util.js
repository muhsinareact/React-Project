
import { ProductDetails } from "./components/ProductDetails/ProductDetails";

export const getProducts = async () => {
    try {
        const url='https://fakestoreapi.com/products'
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json,'aa');
        return json
    } catch (error) {
        console.log("error", error);
    }
    
};


export const getSingleProduct = async(productId)=>{
    console.log('ssssss',productId)
    // const [id,setId] = useState();
    
    const url = `https://fakestoreapi.com/products/${productId}`;
    const response = await fetch(url);
    // console.log(response,'erty')
    // console.log(response.json(),'data')

    const data = await response.json();
    // console.log('single product', data);
    return data
};