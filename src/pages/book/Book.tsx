import { useEffect } from "react";

const BookPage = () => {
    useEffect(() => {
        document.title = "Đăt lịch";
    }, []);

    return (
        <>
            <h1 className="text-3xl underline ">Đăt lịch</h1>
        </>
    )
}

export default BookPage;