export const ContentService = (prop: any) => {
  const { title, className } = prop;
  return (
    <>
      <div className={className}>
        {title}
      </div>
    </>
  );
};
