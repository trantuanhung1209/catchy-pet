import { useEffect, useState } from "react";
import { Section2Item } from "./Section2Item";
import imgTitle from "/images/svg/bg-title.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Section2 = () => {
  const [dataSection2, setDataSection2] = useState<
    { title: String; description: String; image: String }[]
  >([]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/home/section2.json");
        const data = await response.json();
        setDataSection2(data);
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
        className="section-2 pt-[80px] pb-[40px]"
      >
        <div className="container max-w-[1340px] mx-auto">
          <div className="inner-title mb-[30px] flex flex-col justify-center items-center">
            <h2 className="mb-[10px] text-[#f4b915] text-[40px] font-bold">
              Chào mừng bạn đến với Catchy Pet
            </h2>
            <div className="inner-img">
              <img src={imgTitle} alt="title" />
            </div>
          </div>
          <div className="inner-list-pet grid grid-cols-4 gap-[30px]">
            {dataSection2.map((item, index) => (
              <Section2Item key={index} item={item} />
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};
