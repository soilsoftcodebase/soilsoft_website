import React from 'react';

const Products = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full max-w-screen-xl text-center">
          <div className="relative top-[-220px]">
            <div className="flex flex-col text-center justify-center items-center sm:text-left">
              <h1 className="py-3 sm:text-4xl text-3xl font-bold sm:leading-[60px] leading-[40px]">
                Our Products,{' '}
                <span className="text-[#038b46]">Your Growth!</span>
              </h1>
              <p className="text-lg text-gray-600">
                Discover our innovative products designed to enhance efficiency,
                foster growth, and transform your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:max-w-[1180px] m-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative top-[-200px] px-4 md:px-0">
        <img
          src="../src/assets/aigif.gif"
          alt="AI Gif"
          className="w-full h-auto rounded-lg"
        />

        <div>
          <h1 className="py-4 pt-5 text-2xl sm:text-4xl font-semibold">
            <span className="text-[#038b46] text-center">
              AI Products in Progress:{' '}
            </span>
            <br /> Redefining Possibilities
          </h1>
          <p className="py-2 text-lg text-gray-600 text-justify">
            We are actively developing innovative AI products designed to
            transform industries and enhance everyday experiences. Our focus is
            on creating intelligent solutions that streamline processes,
            automate tasks, and address complex challenges. These products aim
            to harness the power of AI to deliver smarter and more efficient
            outcomes for businesses and individuals alike.
            <br /> <br />
            With each development, we are pushing the boundaries of what’s
            possible in technology. Stay tuned as we progress toward launching
            cutting-edge AI tools that redefine innovation and drive success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
