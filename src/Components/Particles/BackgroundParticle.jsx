import { useCallback } from "react";

import { loadFull } from "tsparticles";
import particlesOptions from "./Config/particles.json";
import Particles from "react-tsparticles";

function Background() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, [])

  return (
    <div>
      <Particles options={particlesOptions} init={particlesInit} />
    </div>
  )
}

export default Background;
