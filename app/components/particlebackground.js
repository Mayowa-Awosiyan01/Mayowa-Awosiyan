"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
//import particleConfig from "../config/particleConfig";
//import cascadeConfig from "../config/cascadeConfig";
import binaryConfig from "../config/binaryConfig";

const ParticleBackground = () => {
  const particleInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  //TODO: Add function to use random config file on page reload
  return (
    <div id="particles-div">
      <Particles
        id="particle-effects"
        particleLoaded="particlesLoaded"
        loaded={particlesLoaded}
        options={binaryConfig}
        init={particleInit}
      />
    </div>
  );
};
export default ParticleBackground;
