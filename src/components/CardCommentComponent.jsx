const CardCommentComponent = ({ img, name, range, comment, number }) => {
  return (
    <article
      className={`bg-[hsl(300,43%,22%)] px-8 pt-10 pb-8 lg:pb-10 rounded-md overflow-auto my-4 lg:max-w-[348px] ${
        number == 2 ? "lg:translate-y-4" : number == 3 ? "lg:translate-y-8" : ""
      }`}
    >
      <div className="flex gap-7 lg:gap-6 mb-6">
        <picture className="rounded-b-full overflow-auto">
          <div className="rounded-full overflow-auto">
            <img className="w-10 h-10" src={`/image/${img}`} alt="" />
          </div>
        </picture>
        <div>
          <h3 className="text-[17px] lg:text-[17.1px] font-medium lg:font-semibold text-white -mb-1 lg:-mb-1.5">
            {name}
          </h3>
          <h4 className="text-[16.5px] lg:text-[17.1px] text-[rgb(221,97,153)] -mt-1 lg:-mt-1.5">
            {range}
          </h4>
        </div>
      </div>
      <p className="text-[16.5px] text-white leading-[1.3rem] lg:leading-[1.4rem]">
        {'"'}
        {comment}
        {'"'}
      </p>
    </article>
  );
};
export default CardCommentComponent;
