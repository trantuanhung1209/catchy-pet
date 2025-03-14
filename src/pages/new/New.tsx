import { useEffect } from "react";

const NewPage = () => {
    useEffect(() => {
        document.title = "Tin Tức";
    }, []);

    return (
        <>
            <h1 className="text-3xl underline ">Tin Tức</h1>
        </>
    )
}

export default NewPage;