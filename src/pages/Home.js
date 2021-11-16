import React from 'react';
import Banner from '../components/Banner';
// import Mouse from '../components/Mouse';
import Header from '../components/navigation/Header';
// import ScrollButton from '../components/ScrollButton';




const Home = () => {
  return (
    <>
    {/* <Mouse/> */}
    <div>
      <Header/>
      <Banner/>
      {/* <ScrollButton right={"/projet-1"}/> */}
    </div>
    </>
  );
};

export default Home;
