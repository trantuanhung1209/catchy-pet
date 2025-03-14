import { useEffect } from "react";

const AboutPage = () => {
    useEffect(() => {
        document.title = "Giới thiệu";
    }, []);
    return (
        <>
            <h1 className="text-3xl underline ">About</h1>
            <p>This is the about page.</p>
            <p>Here's a list of some of our products:</p>
            <ul>
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
                <li>Product 4</li>
                <li>Product 5</li>
                <li>Product 6</li>
                <li>Product 7</li>
                <li>Product 8</li>
                <li>Product 9</li>
                <li>Product 10</li>
            </ul>
        </>
    )
}

export default AboutPage;