import React, { memo } from 'react';
import { Hero } from '../components/sections/Hero';
import { Quote } from '../components/sections/Quote';
import { Skills } from '../components/sections/Skills';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';

const Home = memo(() => {
  return (
    <>
      <Hero />
      {/* <Quote /> */}
      <Skills />
      <About />
      <Contact />
    </>
  );
});

Home.displayName = 'Home';

export default Home;
