// import './App.css'

import CardCommentComponent from "./components/CardCommentComponent";
import CardStarComponent from "./components/CardStarComponent";

function App() {
  return (
    <main className="min-h-screen bg-white font-['League_Spartan'] py-20 lg:py-28 px-6 lg:grid lg:grid-rows-[minmax(1fr,275.39px)_auto] lg:place-content-center md:grid md:place-content-center lg:max-w-none">
      <section className="lg:flex lg:gap-10 1.5xl:gap-32 md:max-w-[500px] lg:max-w-none">
        <header>
          <h1 className="text-[hsl(300,43%,22%)] font-extrabold lg:font-bold lg:tracking-tighter text-3xl xs:text-[40px] lg:text-[54px] xs:mx-6 lg:mx-0 text-center lg:text-start lg:max-w-[390px] leading-8 lg:leading-[2.8rem]">
            10,000+ of our users love our products.
          </h1>
          <p className="text-[hsl(303,10%,53%)] font-medium text-[18px] -mx-1.5 lg:mx-0 lg:text-[18px] leading-6 pt-5 md:pt-8 lg:pt-5 pb-6 lg:pb-12 text-center lg:text-start lg:max-w-[440px]">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </header>
        <section className="mb-12">
          <CardStarComponent number={1} starNumber={5} source={"Reviews"} />
          <CardStarComponent number={2} starNumber={5} source={"Report Guru"} />
          <CardStarComponent number={3} starNumber={5} source={"BestTech"} />
        </section>
      </section>
      <footer className="lg:flex lg:gap-8 md:max-w-[500px] lg:max-w-none">
        <CardCommentComponent
          number={1}
          img={"image-colton.jpg"}
          name={"Colton Smith"}
          range={"Verified Buyer"}
          comment={
            " We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "
          }
        />
        <CardCommentComponent
          number={2}
          img={"image-irene.jpg"}
          name={"Irene Roberts "}
          range={"Verified Buyer"}
          comment={
            " Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
          }
        />
        <CardCommentComponent
          number={3}
          img={"image-anne.jpg"}
          name={"Anne Wallace"}
          range={"Verified Buyer"}
          comment={
            " Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "
          }
        />
      </footer>
    </main>
  );
}

export default App;
