import { Title } from "../title/Title";
import { ContentService } from "./ContentService";

export const Section6 = () => {
  return (
    <>
      <section className="section-6 py-[80px]">
        <div className="container max-w-[1340px] mx-auto">
          <Title title="Dịch vụ" />

          <div className="inner-wrap grid grid-cols-3 gap-[40px]">
            <div className="inner-item item-1 min-h-[450px] rounded-[8px] overflow-hidden px-[35px] pt-[55px]">
              <h3 className="text-[#363025] text-center text-[21px] uppercase font-[500] mb-[20px]">
                Chăm sóc thú cưng
              </h3>
              <ContentService title="Giúp thú cưng sạch sẽ hơn, gọn gàng hơn" className="content-service text-[17px] font-[200] mb-[20px] relative pl-[30px] text-[#4e3621]" />
              <ContentService title="Tạo những kiểu tóc sang chảnh, ấn tượng" className="content-service text-[17px] font-[200] mb-[20px] relative pl-[30px] text-[#4e3621]" />
              <ContentService title="Loại bỏ các mầm mống gây bệnh từ lông móng" className="content-service text-[17px] font-[200] mb-[20px] relative pl-[30px] text-[#4e3621]" />
              <ContentService title="Thú cưng được massage đúng cách, tạo tâm lý vui vẻ, thoải mái" className="content-service text-[17px] font-[200] mb-[20px] relative pl-[30px] text-[#4e3621]" />
              <ContentService title="Đảm bảo an toàn cho boss" className="content-service text-[17px] font-[200] mb-[20px] relative pl-[30px] text-[#4e3621]" />
            </div>
            <div className="inner-item item-2 min-h-[450px] rounded-[8px] overflow-hidden px-[35px] pt-[55px]"></div>
            <div className="inner-item item-3 min-h-[450px] rounded-[8px] overflow-hidden px-[35px] pt-[55px]">
              <h3 className="text-white text-center text-[21px] uppercase font-[500] mb-[20px]">
              Kiểm tra thú cưng
              </h3>
              <ContentService title="Ngăn ngừa và sớm phát hiện các bệnh nguy hiểm" className="content-service-2 text-[17px] font-[200] mb-[20px] relative pl-[30px] text-[#f5f5f5]" />
              <ContentService title="Kiểm soát được tình trạng mất cân bằng dinh dưỡng" className="content-service-2 text-[17px] font-[200] mb-[20px] relative pl-[30px] text-[#f5f5f5]" />
              <ContentService title="Phát hiện bệnh từ những dấu hiệu ban đầu và điều trị dứt điểm" className="content-service-2 text-[17px] font-[200] mb-[20px] relative pl-[30px] text-[#f5f5f5]" />
              <ContentService title="Tiết kiệm chi phí và thời gian điều trị cho thú cưng" className="content-service-2 text-[17px] font-[200] mb-[20px] relative pl-[30px] text-[#f5f5f5]" />
              <ContentService title="Phòng ngừa các bệnh lây từ thú sang người" className="content-service-2 text-[17px] font-[200] mb-[20px] relative pl-[30px] text-[#f5f5f5]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
