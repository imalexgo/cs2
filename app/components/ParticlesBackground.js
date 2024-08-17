// ParticlesBackground.js
import React from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            direction: 'none',
            out_mode: 'out',
            speed: 0.5,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;