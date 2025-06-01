import { NavLink } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaChevronDown,
} from "react-icons/fa";
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
                    <li>
                      <NavLink
                        to="/"
                        className="block py-[20px] hover:text-[#b57310] text-[20px]"
                      >
                        Trang chủ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/spa"
                        className="spa block py-[20px] hover:text-[#b57310] text-[20px]"
                      >
                        Dịch vụ Spa
                      </NavLink>
                    </li>
                    <li className="relative group">
                      <NavLink
                        to="/products"
                        className="products py-[20px] hover:text-[#b57310] text-[20px] flex items-center"
                      >
                        Sản phẩm
                        <FaChevronDown className="text-[20px] inline-block ml-[5px]" />
                      </NavLink>

                      {/* Dropdown với flip 2 chiều */}
                      <ul className="dropdown-content absolute bg-white text-start text-black w-[200px] top-[100%] px-[10px] z-10">
                        <li>
                          <NavLink
                            to="/products/category1"
                            className="block py-[10px] hover:text-[#b57310] text-[16px] font-[300] border-b border-[#dddcdc]"
                          >
                            Thức ăn cho chó
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/products/category2"
                            className="block py-[10px] hover:text-[#b57310] text-[16px] font-[300] border-b border-[#dddcdc]"
                          >
                            Thức ăn cho mèo
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/products/category3"
                            className="block py-[10px] hover:text-[#b57310] text-[16px] font-[300] border-b border-[#dddcdc]"
                          >
                            Thức ăn cho Hamster
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/products/category4"
                            className="block py-[10px] hover:text-[#b57310] text-[16px] font-[300] border-b border-[#dddcdc]"
                          >
                            Thức ăn cho chim
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/products/category5"
                            className="block py-[10px] hover:text-[#b57310] text-[16px] font-[300]"
                          >
                            Phụ kiện cho thú cưng
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </div>
                  <div className="inner-logo">
                    <img src="../../../logo.webp" alt="" />
                  </div>
                  <div className="flex justify-between items-center gap-[50px] h-full">
                    <li>
                      <NavLink
                        to="/news"
                        className="block py-[20px] hover:text-[#b57310] text-[20px]"
                      >
                        Tin tức
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className="contact block py-[20px] hover:text-[#b57310] text-[20px]"
                      >
                        Liên hệ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/book"
                        className="book block py-[20px] hover:text-[#b57310] text-[20px]"
                      >
                        Đặt lịch
                      </NavLink>
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
