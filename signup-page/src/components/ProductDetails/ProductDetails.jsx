

export function ProductDetails({image,title,price}) {

    return(
        <div className="App">
            <div className="header">
                <h1>Product Details</h1>
            </div>
            <img src={image} alt={title} className="img"/>
            <h2 className="title">{title}</h2>
            <h2 className="price">${price}</h2>
        </div>
    )
}