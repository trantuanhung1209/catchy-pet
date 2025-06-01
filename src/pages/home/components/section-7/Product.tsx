export const Product = (props: any) => {
  const { item } = props;
  return (
    <>
      <div className="product-item flex gap-[20px] p-[30px] bg-[#ffffff] rounded-[10px]">
        <div className="inner-image relative w-[100px] h-[100px]">
          <img
            className="w-full h-full object-cover "
            src={item.image}
            alt={item.title}
          />
          <span className="discount absolute top-0 right-0 text-white text-sm bg-red-400 rounded-[8px] p-[4px]">-{item.discount}%</span>
        </div>
        <div className="inner-content">
          <h3 title={item.title} className="text-[16px] font-semibold mb-[10px] ml-[5px] line-clamp-1 text-[#333] hover:text-[#f9a629] transition-all duration-500 ease-out">
            {item.title}
          </h3>
          <p className="inner-price mb-[10px] ml-[10px]">
            <span className="text-[18px] text-red-400">
              {item.newPrice.toLocaleString()}đ
            </span>
            <span>
              <del className="text-[16px] text-[#999] ml-[10px]">{item.oldPrice.toLocaleString()}đ</del>
            </span>
          </p>
          <div className="inner-actions flex items-center gap-[10px]">
            <button className="scale-90 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out cursor-pointer p-[8px] rounded-full hover:bg-amber-600 hover:scale-105 text-white bg-[#f9a529]">
              Xem chi tiết
            </button>
            <button className="scale-90 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out cursor-pointer p-[8px] rounded-full hover:bg-amber-600 hover:scale-105 text-white bg-[#f9a529]">
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
