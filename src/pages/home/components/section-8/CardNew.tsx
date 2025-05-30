import { FaClock } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const CardNew = (props: any) => {
  return (
    <>
      <div className="inner-item relative ">
        <div className="inner-logo w-full h-[350px] rounded-[10px] overflow-hidden ">
          <img
            src="/images/news/cach-it-nguoi-day-meo-di-vs.webp"
            className="w-full h-full object-cover"
            alt=""
          />

          <div className="inner-content bg-white p-[25px] rounded-[8px] absolute bottom-[-40%] left-[10%] w-[80%]">
            <h3 className="text-[20px] font-[500] mb-[10px]">
              Cách ít người dạy mèo đi vệ sinh đúng cách
            </h3>
            <p className="text-[17px] font-[200] mb-[20px] line-clamp-3">
              Dạy mèo đi vệ sinh đúng cách là một trong những kỹ năng quan trọng
              mà chủ nuôi cần nắm vững để giúp thú cưng của mình có thể sống
              trong môi trường sạch sẽ và thoải mái.
            </p>
            <div className="flex items-center gap-[20px]">
              <div className="inner-date flex items-center gap-[5px] border-r pr-[20px] border-[#ccc]">
                <FaClock className="text-[20px] text-[#f4b915] inline-block mr-[5px]" />
                <span className="text-[16px] font-[300] text-[#ccc] ">
                  20/10/2023
                </span>
              </div>
              <NavLink
                to="/news"
                className="block text-[#b57310] hover:text-[#020202] text-[17px] font-[500]"
              >
                Xem chi tiết
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
