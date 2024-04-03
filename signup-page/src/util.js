
const url='https://fakestoreapi.com/products'

export const getProducts = async () => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json,'aa');
        return json
    } catch (error) {
        console.log("error", error);
    }
    
};
