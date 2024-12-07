"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "../config/particleConfig";

const ParticleBackground = () => {
  const particleInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div id="particles-div">
      <Particles
        id="particle-effects"
        particleLoaded="particlesLoaded"
        loaded={particlesLoaded}
        options={particleConfig}
        init={particleInit}
      />
    </div>
  );
};
export default ParticleBackground;
