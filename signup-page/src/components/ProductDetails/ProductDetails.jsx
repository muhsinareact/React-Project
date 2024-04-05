import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../util";
import { useEffect, useState } from "react";

export function ProductDetails() {

    const {productId} = useParams()

    const [product, setProduct] = useState(null);

  useEffect(() => {
        // console.log("PRODUCT ID", productId)
    const fetchData = async () => {
    //   console.log('productId',productId)
      const data = await getSingleProduct(productId);
    //   console.log('single prod',data)
      setProduct(data);
    };
    fetchData();
  }, []);

  if (!product) {
    return <div>Loading</div>;
  }
    // console.log(params)
    return(
        <div className="App">
            <div className="header">
                <h1>Product Details</h1>
            </div>
            <img src={product.image} alt={product.title} className="img"/>
            <h2 className="title">{product.title}</h2>
            <h2 className="price">${product.price}</h2>
        </div>
    )
}

// export function ProductDetails({ products }) {
//     const { id } = useParams();
//     const product = products.find(product => product.id === parseInt(id));

//     return (
//         <ProductDetails product={product} />
//     );
// }