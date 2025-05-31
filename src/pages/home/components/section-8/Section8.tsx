import { NavLink } from "react-router-dom";
import { Title } from "../title/Title";
import { CardNew } from "./CardNew";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export const Section8 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [dataNews, setDataNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/home/news.json");
        const data = await response.json();
        setDataNews(data);
      } catch (error) {
        console.error("Error fetching news data:", error);
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
        className="section-8 py-[80px]"
      >
        <div className="container max-w-[1340px] mx-auto">
          <NavLink to="/news" className="block">
            <Title title="Tin tức mới nhất" />
          </NavLink>

          <div className="inner-wrap grid grid-cols-2 gap-[40px] pb-[150px]">
            {dataNews.length >= 2 ? (
              dataNews.slice(0, 2).map((item: NewsItem) => (
                <CardNew key={item.id} item={item} />
              ))
            ) : (
              <div className="col-span-2 text-center text-gray-500">
                Chưa có tin tức mới
              </div>
            )}
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
      </motion.section>
    </>
  );
};
