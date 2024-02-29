import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
const Congratulation = () => {
  const option = useMemo(() => {
    return {
        particles:{
            links: {
                enable: true,
            },
            move: {
                enable: true,
            }
        }
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <div className="bg-slate-900">
     <Particles init={particlesInit} options={option} />;
  </div>
};

export default Congratulation;
