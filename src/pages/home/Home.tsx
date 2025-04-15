import imgSection1 from "/images/banner/slider_1_section_1.webp";
import "./Home.css";
import { Section5 } from "./components/section-5/Section5";
import { Section2 } from "./components/section-2/Section2";
import { Section3 } from "./components/section-3/Section3";

const HomePage = () => {
  
  

  return (
    <>
      {/* section 1 */}
      <section className="section-1">
        <img src={imgSection1} alt="slide" />
      </section>
      {/* end section 1 */}

      {/* section 2 */}
      <Section2 />
      {/* end section 2 */}

      {/* section 3 */}
      <Section3 />
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
