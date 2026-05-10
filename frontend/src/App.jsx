import {useState} from 'react';
import Hero from './Hero.jsx';
import Services from "./Services.jsx";
import Projects from  "./Projects.jsx";
import Footer from "./Footer.jsx";
import BlobCursor from "./Blob.jsx";

const App= () => {
  
  return (
    <>
      <BlobCursor
        blobType="circle"
        fillColor="#FF4D00"
        trailCount={1}
        sizes={[43]}
        innerSizes={[20]}
        innerColor="#FF4D00"
        opacities={[0.45]}
        shadowColor="rgba(0,0,0,0.75)"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={100}
      />
      <Hero/>
      <Services/>
      <Projects/>
    </>
  );
}
 export default App;
