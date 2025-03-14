import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {
        document.title = "Trang chủ";
    }, []);

    return (
        <>
            <h1 className="text-3xl underline ">Home</h1>
        </>
    )
}

export default HomePage;