import { NavLink } from "react-router-dom";
import { Title } from "../title/Title";
import { CardNew } from "./CardNew";
import { FaArrowRight } from "react-icons/fa";

export const Section8 = () => {
  return (
    <>
      <section className="section-8 pt-[80px]">
        <div className="container max-w-[1340px] mx-auto">
          <NavLink to="/news" className="block">
            <Title title="Tin tức mới nhất" />
          </NavLink>

          <div className="inner-wrap grid grid-cols-2 gap-[40px] pb-[150px]">
            <CardNew />
            <CardNew />
          </div>

          <div className="inner-readmore py-[50px] flex items-center justify-end">
            <NavLink
              to="/news"
              className="block flex items-center gap-[5px] text-[20px] text-[#020202] hover:text-[#f4b915] transition-all duration-300"
            >
              Xem thêm tin tức 
              <FaArrowRight />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
