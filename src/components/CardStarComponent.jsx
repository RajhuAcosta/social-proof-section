import { Star } from "../svgs/Svgs";

const CardStarComponent = ({ starNumber, source, number }) => {
  return (
    <div
      className={`bg-[hsl(300,24%,96%)] rounded-lg py-4 my-4 lg:flex lg:gap-5 lg:items-center ${
        number == 2
          ? "lg:translate-x-12"
          : number == 3
          ? "lg:translate-x-24 lg:max-w-[400px] 1.5xl:max-w-none"
          : "lg:max-w-[395px] 1.5xl:max-w-none"
      }`}
    >
      <div className="flex gap-2 place-content-center mb-3 lg:my-0 lg:pl-8">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <h3
        className={`text-[16.5px] lg:text-[16.8px] text-[hsl(300,43%,22%)] font-extrabold lg:font-extrabold text-center ${
          number == 2 ? "lg:pr-6" : ""
        } 1.5xl:pr-14`}
      >
        Rated {starNumber} Stars in {source}
      </h3>
    </div>
  );
};
export default CardStarComponent;
