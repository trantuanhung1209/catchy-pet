import { useEffect } from "react";

const ContactPage = () => {
    useEffect(() => {
        document.title = "Liên hệ";
    }, []);
    return (
        <>
            <h1 className="text-3xl underline ">Contact</h1>
        </>
    )
}

export default ContactPage;