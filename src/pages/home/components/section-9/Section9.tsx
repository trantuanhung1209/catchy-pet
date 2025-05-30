export const Section9 = () => {
  return (
    <>
      <section className="section-9 py-[80px] bg-[#fcf8ee]">
        <div className="container max-w-[1340px] mx-auto">
          <div className="inf-scroll-horizon">
            <div className="logos">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-center gap-[60px]">
                  <img
                    src="/images/brands/brand_1.webp"
                    alt="Brand 1"
                    className="w-[100px] h-[100px] object-contain"
                  />
                  <img
                    src="/images/brands/brand_2.webp"
                    alt="Brand 2"
                    className="w-[100px] h-[100px] object-contain"
                  />
                  <img
                    src="/images/brands/brand_3.webp"
                    alt="Brand 3"
                    className="w-[100px] h-[100px] object-contain"
                  />
                  <img
                    src="/images/brands/brand_4.webp"
                    alt="Brand 4"
                    className="w-[100px] h-[100px] object-contain"
                  />
                  <img
                    src="/images/brands/brand_5.webp"
                    alt="Brand 5"
                    className="w-[100px] h-[100px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
