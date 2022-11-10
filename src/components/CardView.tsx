import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable @next/next/no-img-element */
export const CardView = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:flex md:items-center md:justify-center">
      <img
        className="md:h-60 h-40 w-full md:rounded-l-md rounded-t-md sm:object-none sm:object-left-top"
        src="/image/image-product-desktop.jpg"
        alt=""
      />
      <div
        id="right"
        className="md:h-60 h-42 md:max-w-[130px] max-w-[180px] md:rounded-r-md sm:rounded-b-md bg-white p-4"
      >
        <h3 className="text-[6px] text-Montserrat text-zinc-300 tracking-[0.3rem] font-bold">
          PERFUME
        </h3>
        <h1 className="font-Fraunces text-sm text-black font-bold my-2 sm:my-1">
          Gabrielle Essence Eau De Parfum
        </h1>
        <h3 className="text-[6px] text-Montserrat text-zinc-400  leading-3">
          A floral, solar and voluptuous interpretation composed by Olivierm
          Polge, Perfumer-Creator for the House of CHANEL.
        </h3>
        <div className="my-2 sm:my-1 flex items-center">
          <h1 className="text-Dark-cyan font-bold font-Fraunces text-sm mr-2">
            $149.99
          </h1>
          <h3 className="text-zinc-400 text-[7px] line-through">$169.99</h3>
        </div>
        <button className="rounded-lg bg-Grayish-blue hover:bg-Dark-blue w-full py-2">
          {/* <FontAwesomeIcon icon="fa-regular fa-cart-shopping" /> */}
          <h4 className="text-white text-[8px]">Add to Cart</h4>
        </button>
      </div>
    </div>
  );
};
