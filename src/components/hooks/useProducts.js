import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
        
    }, []);

    return [products, setProducts]; //js e matro ekta jinis return kora jai
    // ekadhik kicu return korte hole [array] toiri kore return kora jai . akhne ekti array retun kora hoyese
}

export default useProducts;