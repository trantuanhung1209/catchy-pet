import { useEffect } from "react";
import { Breadcumb } from "../../components/breadcumb/Breadcumb";

const SpaPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const services = [
        {
            "title": "Tắm gội cho thú cưng ",
            "price": "100.000",
        },
        {
            "title": "Cắt tỉa móng tay móng chân",
            "price": "200.000",
        },
        {
            "title": "Cắt tóc tạo kiểu lông thú cưng",
            "price": "300.000",
        },
        {
            "title": "Massage cho thú cưng",
            "price": "800.000",
        },
        {
            "title": "Vệ sinh móng tay móng chân",
            "price": "150.000",
        },
        {
            "title": "Dịch vụ đặc biệt",
            "price": "1.000.000",
        },
    ];

    useEffect(() => {
        document.title = "Giới thiệu - Spa Thú Cưng";
    }, []);
    return (
        <>
            <Breadcumb title="Giới thiệu - Spa Thú Cưng" />
            <section className="inner-about">
                <div className="container max-w-[1340px] mx-auto">
                    <h1 className="text-[40px] font-semibold mb-[30px] text-[#333]">Giới thiệu</h1>
                    <p className="text-[18px] mb-[20px] text-[#333]">
                        Đây là trang giới thiệu về chúng tôi. Chúng tôi cung cấp các sản phẩm và dịch vụ tốt nhất cho khách hàng.
                    </p>
                    <p className="text-[18px] mb-[20px] text-[#333]">
                        Với đội ngũ nhân viên chuyên nghiệp và giàu kinh nghiệm, chúng tôi cam kết mang đến sự hài lòng cho khách hàng.
                    </p>
                    <h2 className="text-[26px] font-semibold mb-[20px] text-[#333]">
                        Bảng giá spa thú cưng
                    </h2>
                    <div className="inner-box-price bg-white rounded-[12px] border border-[#eeddba] px-[30px] py-[50px]">
                        <table className="w-full text-left border-collapse ">
                            <tbody>
                                {services.map((service, index) => (
                                    <tr key={index} className="hover:bg-[#f5f5f5] transition-all duration-300">
                                        <td className="border-b border-[#eeddba] p-4 flex items-center gap-2 text-[18px]">
                                            <img src="/images/svg/bg_list_sv.webp" alt="" />
                                            {service.title}
                                        </td>
                                        <td className="border-b border-[#eeddba] text-red-400 p-4 text-end">{service.price} VNĐ</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="inner-banner flex justify-center items-center">
                    <img src="/images/svg/banner_price.webp" alt="About Banner" />
                </div>
            </section>
        </>
    )
}

export default SpaPage;