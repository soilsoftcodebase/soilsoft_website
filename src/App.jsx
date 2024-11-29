import React from 'react';
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from './components';
import styles from './style';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        {/*<AnimatedCursor
          //color="255,255,255"
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          hasBlendMode={true}
          outerStyle={{
            border: '3px solid var(--cursor-color)',
          }}
          innerStyle={{
            backgroundColor: 'var(--cursor-color)',
          }}
        />*/}
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          {/*<CardDeal />*/}
          {/*<Clients />*/}
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
