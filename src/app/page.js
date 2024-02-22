import React from 'react'
import HomePageContainer from "@/containers/home-page-container";
import { HomePageProvider } from '@/containers/home-page-container/use-homepage';

function HomePage() {
  return (
    <HomePageProvider>
      <HomePageContainer />
    </HomePageProvider>
  );
}

export default HomePage;