import { NavLink } from "react-router-dom";
import { Title } from "../title/Title";
import { FaArrowRight } from "react-icons/fa6";
import { Product } from "./Product";

export const Section7 = () => {
  return (
    <>
      <section className="section-7 py-[80px]">
        <div className="container max-w-[1340px] mx-auto">
          <Title title="Phụ kiện cho thú cưng" />
          <div className="grid grid-cols-3 gap-[30px]">
            <Product />
            <Product />
            <Product /> 
            <Product />
            <Product />
            <Product />    
          </div>
          <div className="inner-readmore flex items-center justify-center pt-[40px]">
            <NavLink
              to="/products"
              className="block flex items-center gap-[5px] text-[20px] text-white hover:text-[#020202]"
            >
              Xem thêm sản phẩm <FaArrowRight />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
