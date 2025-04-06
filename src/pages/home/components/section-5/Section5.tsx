import { useEffect, useState } from "react";
import { Section3Item } from "../section-3/Section3Item";
import { Title } from "../title/Title";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const Section5 = () => {
  const categories = [
    { label: "Thức ăn cho mèo", tag: "cat" },
    { label: "Thức ăn cho chó", tag: "dog" },
    { label: "Thức ăn cho hamster", tag: "hamster" },
    { label: "Thức ăn cho chim", tag: "bird" },
  ];

  const [selectedTag, setSelectedTag] = useState<string>("cat");
  const [visible, setVisible] = useState(true);
  const [allProducts, setAllProducts] = useState<typeof dataProduct>([]);
  const [dataProduct, setsetDataProduct] = useState<
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

  const filterProducts = (tag: string, data: any) => {
    return data.filter((item: any) => item.category.includes(tag));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/home/products.json");
        const data = await response.json();
        setAllProducts(data);
        const filtered = filterProducts(selectedTag, data);
        setsetDataProduct(filtered);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSelectTag = (tag: string) => {
    setVisible(false); // Ẩn trước

    setTimeout(() => {
      const filtered = filterProducts(tag, allProducts); // allProducts là data gốc
      setSelectedTag(tag);
      setsetDataProduct(filtered);
      setVisible(true); // Hiện lại
    }, 500); // Delay 0.5s
  };

  return (
    <>
      <section className="section-5 py-[80px]">
        <div className="container max-w-[1340px] mx-auto">
          <Title title="Sản phẩm shop đang bán" />

          <div className="inner-categories flex justify-center items-center">
            <ul className="inner-list-option flex items-center justify-between gap-[30px]">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`p-[10px] cursor-pointer rounded-[50px] transition-all ${
                    selectedTag === category.tag
                      ? "bg-white custom-box-shadow text-[#f4b915]"
                      : "hover:bg-white hover:custom-box-shadow hover:text-[#f4b915]"
                  }`}
                  onClick={() => handleSelectTag(category.tag)}
                >
                  <span className="text-[18px] font-[500]">
                    {category.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`inner-list-products grid grid-cols-4 gap-[20px] p-[30px] overflow-hidden rounded-bl-[10px] rounded-br-[10px] transition-all duration-500 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {dataProduct.map((item, index) => (
              <Section3Item key={index} item={item} />
            ))}
          </div>
          <div className="inner-readmore flex items-center justify-center">
            <NavLink to="/products" className="block flex items-center gap-[5px] hover:text-[#f4b915]">Xem thêm sản phẩm <FaArrowRight /></NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
