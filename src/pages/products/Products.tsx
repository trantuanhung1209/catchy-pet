import { useEffect } from "react";

const ProductsPage = () => {
    useEffect(() => {
        document.title = "Sản phẩm";
    }, []);

    return (
        <>
            <h1 className="text-3xl underline ">Products</h1>
        </>
    )
}

export default ProductsPage;