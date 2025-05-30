import imgSection1 from "/images/banner/slider_1_section_1.webp";
import { Section5 } from "./components/section-5/Section5";
import { Section2 } from "./components/section-2/Section2";
import { Section3 } from "./components/section-3/Section3";
import { Section6 } from "./components/section-6/Section6";
import "./Home.css";
import { Section7 } from "./components/section-7/Section7";
import { Section8 } from "./components/section-8/Section8";
import { Section9 } from "./components/section-9/Section9";

const HomePage = () => {
  
  

  return (
    <>
      {/* section 1 */}
      <section className="section-1 bg-[#fcf8ee]">
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
      <section className="section-4 py-[80px] bg-[#fcf8ee]">
        <img src="/images/banner/banner_index_section-3.webp" alt="" />
      </section>
      {/* end section 4 */}

      {/* section 5 */}
      <Section5 />
      {/* end section 5 */}

      {/* section 6 */}
      <Section6 />
      {/* end section 6 */}

      {/* section 7 */}
      <Section7 />
      {/* end section 7 */}

      {/* section 8 */}
      <Section8 />
      {/* end section 8 */}

      {/* section 9 */}
      <Section9 />
      {/* end section 9 */}
    </>
  );
};

export default HomePage;
