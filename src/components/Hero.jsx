import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingZ}`}
    >
      {/* Left Content Section */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full ml-10">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[48px] md:text-[64px] lg:text-[72px] text-[36px] text-black ss:leading-[70px] md:leading-[85px] lg:leading-[100.8px] leading-[50px]">
            AI-Driven <br className="sm:block hidden" />{' '}
            <span className="text-gradient text-[36px] md:text-[2rem] lg:text-[2.5rem]">
              Intelligence Testing{' '}
              <span className="text-[2rem] md:text-[2.2rem] lg:text-[2.7rem]">
                for
              </span>{' '}
              <br className="sm:block hidden" />{' '}
              <span className="text-[2rem] md:text-[1.6rem] lg:text-[2rem]">
                Enhanced Automation
              </span>
            </span>{' '}
          </h1>
        </div>
        {/* Optional Description */}
        {/* <p className={`font-semibold max-w-[470px] mt-5 text-black`}>
          Transforming technology into powerful tools to drive your success.
        </p> */}
      </div>

      {/* Right Content Section */}
      <div
        className={`flex-1 flex justify-center items-center md:my-0 my-10 relative `}
      >
        {/* Responsive Video Wrapper */}
        <div className="relative w-full max-w-[600px] aspect-video rounded-lg overflow-hidden mb-0 mx-4  sm:mx-24 sm:mb-10">
          <iframe
            src="https://www.youtube.com/embed/3W4nuM_WwSU?autoplay=1&mute=1&loop=1&playlist=3W4nuM_WwSU"
            title="Popup Video"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Placeholder for GetStarted Button (hidden on small screens) */}
      <div className={`ss:hidden ${styles.flexCenter}`}></div>
    </section>
  );
};

export default Hero;
