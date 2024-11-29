import React from 'react';
import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter}  flex-row flex-wrap sm:mb-20  mt-10`}>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex justify-center items-center flex-row m-3 " >
          <h4 className="font-poppins font-semibold text-[18px] xs:text-[24px] sm:text-[32px] xs:leading-[42px] leading-[36px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal text-[15px] xs:text-[20px] sm:text-[22px] xs:leading-[21px] leading-[18px] text-white uppercase ml-3">
            {stat.title}
          </p>
        
        </div>
      ))}
              <div className="w-full h-px bg-gray-700 my-5" />
    </section>
  );
};

export default Stats;
