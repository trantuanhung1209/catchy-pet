import { NavLink } from "react-router-dom";
import { Title } from "../title/Title";
import { FaArrowRight } from "react-icons/fa6";
import { Product } from "./Product";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface Products {
  id: String;
  title: String;
  brand: String;
  oldPrice: String;
  newPrice: String;
  discount?: Number;
  description: String;
  category: Array<String>;
  image: String;
  image2?: String;
  image1?: String;
  image3?: String;
}

export const Section7 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [dataAssessories, setDataAccessories] = useState<Products[]>([]);

  const dataFilterAssessories = (data: Products[]) => {
    return data.filter(item => item.category.includes("accessories"));
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/home/products.json");
        const data = await response.json();
        const filteredData = dataFilterAssessories(data);
        setDataAccessories(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  },[])

  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="section-7 py-[80px]"
      >
        <div className="container max-w-[1340px] mx-auto">
          <Title title="Phụ kiện cho thú cưng" />
          <div className="grid grid-cols-3 gap-[30px]">
            {dataAssessories.length >= 6 ? (
              dataAssessories.slice(0, 6).map((item, index) => (
                <Product key={index} item={item} />
              ))
            ) : (
              dataAssessories.map((item, index) => (
                <Product key={index} item={item} />
              ))
            )} 
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
      </motion.section>
    </>
  );
};
