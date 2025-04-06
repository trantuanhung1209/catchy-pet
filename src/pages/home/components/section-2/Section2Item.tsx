export const Section2Item = (props: any) => {
    const { item } = props;
  return (
    <>
      <div className="inner-item text-center">
        <div className="inner-img flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
          />
        </div>
        <h3 className="inner-title font-[600] text-[20px]">{item.title}</h3>
        <p>
          {item.description}
        </p>
      </div>
    </>
  );
};
