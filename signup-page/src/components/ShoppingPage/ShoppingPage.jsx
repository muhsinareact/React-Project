import {useState, useEffect} from "react";
import  {getProducts} from "../../util";

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
            <div className="container">
                <div className="mainHeader">
                    <h1>Shopping Page</h1>
                </div>
            </div>
            <div className="prod">
                
            </div>
        </div>
    )
}