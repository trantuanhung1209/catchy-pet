import { useEffect, useState } from "react";
import imgTitle from "/images/svg/bg-title.png";
import imgSection1 from "/images/banner/slider_1_section_1.webp";
import img1TitleSection3 from "/images/svg/bg-title-bs1.webp";
import img2TitleSection3 from "/images/svg/bg-title-bs2.webp";
import img3TitleSection3 from "/images/svg/bg-title-bs3.png";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Section2Item } from "./components/section-2/Section2Item";
import { Section3Item } from "./components/section-3/Section3Item";
import { Section5 } from "./components/section-5/Section5";

const HomePage = () => {
  const [dataSection2, setDataSection2] = useState<
    { title: String; description: String; image: String }[]
  >([]);
  const [dataSection3, setDataSection3] = useState<
    {
      id: String;
      title: String;
      brand: String;
      oldPrice: String;
      newPrice: String;
      description: String;
      category: Array<String>;
      image: String;
      image2?: String;
      image1?: String;
      image3?: String;
    }[]
  >([]);

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

  useEffect(() => {
    document.title = "Trang chủ";
  }, []);

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
      {/* section 1 */}
      <section className="section-1">
        <img src={imgSection1} alt="slide" />
      </section>
      {/* end section 1 */}

      {/* section 2 */}
      <section className="section-2 pt-[80px] pb-[40px]">
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
      </section>
      {/* end section 2 */}

      {/* section 3 */}
      <section className="section-3 pt-[120px]">
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
      </section>
      {/* end section 3 */}

      {/* section 4 */}
      <section className="section-4 py-[80px]">
        <img src="/images/banner/banner_index_section-3.webp" alt="" />
      </section>
      {/* end section 4 */}

      {/* section 5 */}
      <Section5 />
      {/* end section 5 */}
    </>
  );
};

export default HomePage;
