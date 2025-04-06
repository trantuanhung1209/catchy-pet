import { NavLink } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import "./Header.css";

export const Header = () => {

  return (
    <>
      <header className=" header text-white text-center sticky top-0 left-0 z-[9999] ">
        <div className="container max-w-[1340px] mx-auto  rounded-[50px] p-[5px]">
            <div className="inner-actions h-[75px] flex justify-end items-center relative z-[9] ">
                <div className="inner-search hover:text-[#6e5100] cursor-pointer p-[20px]">
                    <FaSearch className="search-icon text-[26px] font-bold" />
                </div>
                <div className="inner-user hover:text-[#6e5100] cursor-pointer p-[20px]">
                    <FaUser className="user-icon text-[26px] font-bold" />
                </div>
                <div className="inner-cart hover:text-[#6e5100] cursor-pointer p-[20px]">
                    <FaShoppingCart className="cart-icon text-[26px] font-bold" />
                </div>
            </div>
            <div className="inner-wrap bg-[#71cbe8] h-[77px] p-[5px] rounded-[50px]">
                <div className="border border-dashed border-white rounded-[50px] w-[100%] h-[100%] flex justify-between items-center">
                    <nav className="w-[100%]">
                        <ul className="flex justify-around items-center px-[20px]">
                            <div className="flex justify-between items-center gap-[50px] h-full">
                                {/* {menu.splice(0,3).map((item, index) => 
                                    <li key={index}>
                                        <NavLink to={item.link} className="block py-[20px] hover:text-[#b57310] text-[20px]">{item.title}</NavLink>
                                    </li>
                                )} */}
                                <li>
                                    <NavLink to="/" className="block py-[20px] hover:text-[#b57310] text-[20px]">Trang chủ</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className="about block py-[20px] hover:text-[#b57310] text-[20px]">Giới thiệu</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/products" className="products block py-[20px] hover:text-[#b57310] text-[20px]">Sản phẩm</NavLink>
                                </li>
                            </div>
                            <div className="inner-logo">
                                <img src="../../../logo.webp" alt="" />
                            </div>
                            <div className="flex justify-between items-center gap-[50px] h-full">
                                <li>
                                    <NavLink to="/new" className="block py-[20px] hover:text-[#b57310] text-[20px]">Tin tức</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="contact block py-[20px] hover:text-[#b57310] text-[20px]">Liên hệ</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/book" className="book block py-[20px] hover:text-[#b57310] text-[20px]">Đặt lịch</NavLink>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
      </header>
    </>
  );
};
