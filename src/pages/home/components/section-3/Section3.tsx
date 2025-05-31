import { NavLink } from "react-router-dom";
import img1TitleSection3 from "/images/svg/bg-title-bs1.webp";
import img2TitleSection3 from "/images/svg/bg-title-bs2.webp";
import img3TitleSection3 from "/images/svg/bg-title-bs3.png";
import { useEffect, useState } from "react";
import { Section3Item } from "./Section3Item";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface Section3ItemProps {
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

export const Section3 = () => {
  const [dataSection3, setDataSection3] = useState<Section3ItemProps[]>([]);

  useEffect(() => {
    document.title = "Trang chủ";
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/home/products.json");
        const data = await response.json();
        setDataSection3(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="section-3 pt-[120px]"
      >
        <div className="container max-w-[1340px] mx-auto">
          <h2 className="inner-title py-[12px] bg-[#f9a529] text-center relative">
            <NavLink
              to="/products"
              className="text-[40px] font-bold text-white hover:text-[#333]"
            >
              Sản phẩm nổi bật
            </NavLink>

            <img
              src={img1TitleSection3}
              alt=""
              className="img-1 absolute bottom-[38px] left-[20%]"
            />
            <img
              src={img2TitleSection3}
              alt=""
              className="img-2 absolute bottom-0 right-0"
            />
            <img
              src={img3TitleSection3}
              alt=""
              className="img-3 absolute bottom-0 left-0"
            />
          </h2>
          <div className="inner-list-products grid grid-cols-4 bg-white border border-[3px] border-[#f9a529] p-[30px] overflow-hidden rounded-bl-[10px] rounded-br-[10px]">
            {dataSection3.slice(0, 4).map((item, index) => (
              <Section3Item key={index} item={item} />
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};
