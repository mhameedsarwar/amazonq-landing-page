import React from 'react';
import Hero from '../../components/home/Hero';
import Categories from '../../components/home/Categories';
import PromotionalBlocks from '../../components/home/PromotionalBlocks';
import EverlaneProducts from '../../components/home/EverlaneProducts';
import Mission from '../../components/home/Mission';
import Testimonials from '../../components/home/Testimonials';
import ContentBlocks from '../../components/home/ContentBlocks';
import EverlaneOnYou from '../../components/home/EverlaneOnYou';
import FeatureBlocks from '../../components/home/FeatureBlocks';

const HomePage = ({ currency }) => {
  return (
    <div>
      <Hero />
      <Categories />
      <PromotionalBlocks />
      <Mission />
      <EverlaneProducts currency={currency} />
      <Testimonials />
      <ContentBlocks />
      <EverlaneOnYou />
      <FeatureBlocks />
    </div>
  );
};

export default HomePage;