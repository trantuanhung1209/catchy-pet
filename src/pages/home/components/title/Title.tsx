import imgTitle from "/images/svg/bg-title.png";

export const Title = (props:any) => {
    const { title } = props;
  return (
    <>
      <div className="inner-title mb-[30px] flex flex-col justify-center items-center">
        <h2 className="mb-[10px] text-[#f4b915] text-[40px] font-bold">
          {title}
        </h2>
        <div className="inner-img">
          <img src={imgTitle} alt="title" />
        </div>
      </div>
    </>
  );
};
