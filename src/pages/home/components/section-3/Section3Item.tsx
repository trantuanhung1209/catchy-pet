export const Section3Item = (props: any) => {
    const {item} = props;
  return (
    <>
      <div className="inner-titem group relative p-5 bg-white rounded-2xl cursor-pointer overflow-hidden">
        {/* Ảnh + Nội dung */}
        <div className="inner-image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="inner-title text-center pt-5">{item.title}</div>
        <div className="inner-price flex items-center gap-2 justify-center">
          <div className="new-price text-red-400">{item.newPrice.toLocaleString()}₫</div>
          <div className="old-price line-through text-gray-400">{item.oldPrice.toLocaleString()}₫</div>
        </div>

        {/* Layer mờ + nút */}
        <div className="inner-actions absolute top-0 left-0 w-full h-full bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
          <button className="btn-buy scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out cursor-pointer hover:bg-amber-600 hover:scale-105 text-white bg-[#f9a529] py-2 px-6 rounded-full">
            Mua ngay
          </button>
          <button className="btn-view scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out delay-100 cursor-pointer hover:bg-amber-600 hover:scale-105 text-white bg-[#f9a529] py-2 px-6 rounded-full">
            Xem chi tiết
          </button>
        </div>
      </div>
    </>
  );
};
